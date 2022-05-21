package jasu_be.services;

import jasu_be.dto.ClassroomDTO;
import jasu_be.dto.StudentDTO;
import jasu_be.dto.TeacherDTO;
import jasu_be.dto.requestdto.StudentRequest;
import jasu_be.dto.requestdto.TeacherRequest;
import jasu_be.entity.*;
import jasu_be.message.Const;
import jasu_be.payload.request.LoginRequest;
import jasu_be.payload.request.SignupRequest;
import jasu_be.payload.response.JwtResponse;
import jasu_be.repository.*;
import jasu_be.security.jwt.JwtUtils;
import jasu_be.security.services.AccountDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private ClassroomRepository classroomRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private JwtUtils jwtUtils;

    public Boolean existsByPhone(String phone) {
        return accountRepository.existsByPhone(phone);
    }

    public Boolean existsByEmail(String email) {
        return accountRepository.existsByEmail(email);
    }

    public Boolean existsByUsername(String username) {
        return accountRepository.existsByPhone(username);
    }

    public ResponseEntity<JwtResponse> authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        AccountDetailsImpl userDetails = (AccountDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    public String registerUser(SignupRequest signUpRequest) {
        try {
            if (existsByUsername(signUpRequest.getUsername())) {
                return "Error: Username is already taken!";
            }

            if (existsByEmail(signUpRequest.getEmail())) {
                return "Error: Email is already in use!";
            }

            if (existsByPhone(signUpRequest.getPhone())) {
                return "Error: Phone is already in use!";
            }

            Account account = new Account(signUpRequest.getUsername(),
                    signUpRequest.getEmail(),
                    signUpRequest.getPhone(),
                    encoder.encode(signUpRequest.getPassword()));

            Set<Role> roles = new HashSet<>();
            Role userRole = roleRepository.findByName(ERole.GUEST)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
            account.setRoles(roles);
            accountRepository.save(account);
            return "Waiting for accepted";
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String registrationStudentNew(StudentRequest signupRequestStudent) {
        try {
            if (existsByUsername(signupRequestStudent.getUsername())) {
                return "Error: User is already taken!";
            }
            if (existsByEmail(signupRequestStudent.getEmail())) {
                return "Error: Email is already taken!";
            }

            if (existsByPhone(signupRequestStudent.getPhone())) {
                return "Error: Phone is already taken!";
            }

            Account account = new Account(signupRequestStudent.getUsername(),
                    signupRequestStudent.getEmail(),
                    signupRequestStudent.getPhone(),
                    encoder.encode(signupRequestStudent.getPassword()));
            Set<Role> roles = new HashSet<>();
            Role userRole = roleRepository.findByName(ERole.STUDENT)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
            account.setRoles(roles);

            accountRepository.save(account);

            int idNewStudent = Integer.parseInt(String.valueOf(accountRepository.findByUsername(account.getUsername()).get().getIdAccount()));
            Student newStudent = new Student(idNewStudent, signupRequestStudent.getFullName(),
                    signupRequestStudent.getAge(), signupRequestStudent.getAddress(), signupRequestStudent.getSex());
            studentRepository.save(newStudent);
            return Const.SUCCESS;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String registrationTeacherNew(TeacherRequest signUpRequestTeacher) {
        try {
            if (existsByUsername(signUpRequestTeacher.getUsername())) {
                return "Error: User is already taken!";
            }
            if (existsByEmail(signUpRequestTeacher.getEmail())) {
                return "Error: Email is already taken!";
            }

            if (existsByPhone(signUpRequestTeacher.getPhone())) {
                return "Error: Phone is already taken!";
            }

            Account account = new Account(signUpRequestTeacher.getUsername(),
                    signUpRequestTeacher.getEmail(),
                    signUpRequestTeacher.getPhone(),
                    encoder.encode(signUpRequestTeacher.getPassword()));
            Set<Role> roles = new HashSet<>();
            Role userRole = roleRepository.findByName(ERole.TEACHER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
            account.setRoles(roles);

            accountRepository.save(account);

            int idNewTeacher = Integer.parseInt(String.valueOf(accountRepository.findByUsername(account.getUsername()).get().getIdAccount()));
            Teacher newTeacher = new Teacher(idNewTeacher, signUpRequestTeacher.getFullName(),
                    signUpRequestTeacher.getAge(), signUpRequestTeacher.getAddress(),
                    signUpRequestTeacher.getSex(), signUpRequestTeacher.getCv(),
                    signUpRequestTeacher.getLevel());

            teacherRepository.save(newTeacher);
            return Const.SUCCESS;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String registrationStudentFromGuest(StudentRequest signupRequestStudent) {
        try {
            Account account = accountRepository.findByUsername(signupRequestStudent.getUsername()).get();

            account.getRoles().add(roleRepository.findByName(ERole.STUDENT)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found.")));
            accountRepository.save(account);

            Student newStudent = new Student(Integer.parseInt(String.valueOf(account.getIdAccount())),
                    signupRequestStudent.getFullName(),
                    signupRequestStudent.getAge(), signupRequestStudent.getAddress(),
                    signupRequestStudent.getSex());
            studentRepository.save(newStudent);

            return Const.SUCCESS;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String registrationTeacherFromGuest(TeacherRequest signupRequestTeacher) {
        try {
            Account account = accountRepository.findByUsername(signupRequestTeacher.getUsername()).get();

            account.getRoles().add(roleRepository.findByName(ERole.STUDENT)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found.")));

            accountRepository.save(account);
            int idNewTeacher = Integer.parseInt(String.valueOf(accountRepository.findByUsername(account.getUsername()).get().getIdAccount()));
            Teacher newTeacher = new Teacher(idNewTeacher, signupRequestTeacher.getFullName(),
                    signupRequestTeacher.getAge(), signupRequestTeacher.getAddress(),
                    signupRequestTeacher.getSex(), signupRequestTeacher.getCv(),
                    signupRequestTeacher.getLevel());

            teacherRepository.save(newTeacher);

            return Const.SUCCESS;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String updateAccountInfo(Integer idAccount, String pw, String email) {
        try {
            if (accountRepository.existsById(idAccount)) {
                Account accountUpdate = accountRepository.getById(idAccount);
                if (pw != null && !pw.equals(""))
                    accountUpdate.setPassword(pw);
                if (email != null && !email.equals(""))
                    accountUpdate.setEmail(email);
                accountRepository.save(accountUpdate);
                return Const.SUCCESS;
            }
            return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String updateStudentInfo(StudentDTO student) {
        try {
            if (studentRepository.existsById(student.getIdStudent())) {
                Student studentUpdate = studentRepository.getById(student.getIdStudent());
                studentUpdate.setFullName(student.getFullName());
                studentUpdate.setAge(student.getAge());
                studentUpdate.setAddress(student.getAddress());
                studentUpdate.setSex(student.getSex());
//                if (!studentUpdate.equals(studentRepository.getById(student.getIdStudent())))
                studentRepository.save(studentUpdate);
                return Const.SUCCESS;
            } else return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String updateTeacherInfo(TeacherDTO teacher) {
        try {
            if (teacherRepository.existsById(teacher.getIdTeacher())) {
                Teacher teacherUpdate = teacherRepository.getById(teacher.getIdTeacher());
                teacherUpdate.setFullName(teacher.getFullName());
                teacherUpdate.setAge(teacher.getAge());
                teacherUpdate.setAddress(teacher.getAddress());
                teacherUpdate.setSex(teacher.getSex());
                teacherUpdate.setCv(teacher.getCv());
                if (!teacherUpdate.equals(teacherRepository.getById(teacher.getIdTeacher())))
                    teacherRepository.save(teacherUpdate);
                return Const.SUCCESS;
            } else return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }


    public List<?> allAttemptClass(Integer idUser) {
        List<ClassroomDTO> allAttemptClass = new ArrayList<>();
        try {
            classroomRepository.findAll()
                    .stream().forEach(clr -> {
                        if (clr.getIdStudents().contains(idUser.toString())) {
                            allAttemptClass.add(new ClassroomDTO(
                                    clr.getIdClass(), null,
                                    teacherRepository.getById(clr.getIdTeachers()).getFullName(),
                                    null, null, clr.getIdStudents().trim().split(" ").length,
                                    null, null, null, null, clr.getScheduler(), null, null,
                                    clr.getSubject(), clr.getOnlOff(), clr.getVoiceRegion(), null
                            ));
                        }
                    });
            return allAttemptClass;
        } catch (Exception e) {
            return (List) e;
        }
    }

    public Map allOwnClass(Integer idUser) {
        Map<String, String> allOwnClass = new HashMap<>();
        try {
            classroomRepository.findAll()
                    .stream().forEach(classroom -> {
                        if (classroom.getOwner().equals(idUser)) {
                            allOwnClass.put(
                                    classroom.getNameClass(),
                                    teacherRepository.getById(classroom.getIdTeachers()).getFullName()
                            );
                        }
                    });
            return allOwnClass;
        } catch (Exception e) {
            return (Map) e;
        }
    }

    public ClassroomDTO getClassInfo(Integer idClass) {
        try {
            if (classroomRepository.existsById(idClass)) {
                Classroom c = classroomRepository.getById(idClass);
                return new ClassroomDTO(
                        c.getIdClass(), c.getNameClass(),
                        teacherRepository.getById(c.getIdTeachers()).getFullName(),
                        c.getEndAt(), c.getGrade(), c.getIdStudents().trim().split(" ").length,
                        c.getLocation(), c.getMaxAllow(), c.getMinAllow(), c.getPrice(),
                        c.getScheduler(), c.getStartAt(), c.getStatus(),
                        c.getSubject(), c.getOnlOff(), c.getVoiceRegion(),null
                );
            } else return new ClassroomDTO();
        } catch (Exception e) {
            return new ClassroomDTO();
        }
    }

    public String confirmTeacher(Integer idClass, Integer idTeacher, Integer idOwner) {
        try {
            if (classroomRepository.existsById(idClass) &&
                    teacherRepository.existsById(idTeacher) &&
                    accountRepository.existsById(idOwner)) {
                Classroom classroomUpdate = classroomRepository.getById(idClass);
                classroomUpdate.setIdTeachers(idTeacher);
                classroomRepository.save(classroomUpdate);
                return Const.SUCCESS;
            } else return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }
}
