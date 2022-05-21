package jasu_be.services;

import jasu_be.dto.RateDTO;
import jasu_be.dto.requestdto.ClassroomRequest;
import jasu_be.entity.Classroom;
import jasu_be.entity.Notification;
import jasu_be.entity.Student;
import jasu_be.entity.Teacher;
import jasu_be.message.Const;
import jasu_be.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.stream.Collectors;

@Service
public class StudentService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private ClassroomRepository classroomRepository;
    @Autowired
    private NotificationRepository notificationRepository;
    @Autowired
    private RateRepository rateRepository;
    public String inviteTeacher(Integer idClass, Integer idTeacher, Integer idUser) {
        try {
            if (accountRepository.existsById(idUser) &&
                    classroomRepository.existsById(idClass) &&
                    teacherRepository.existsById(idTeacher)) {
                Classroom classroom = classroomRepository.getById(idClass);
                notificationRepository.save(new Notification(idTeacher,
                        "Invite to teach class " + classroom.getNameClass() + " by " + accountRepository.getById(idUser).getUsername(),
                        "invite " + idTeacher + " " + classroom.getIdClass(),
                        new Timestamp(System.currentTimeMillis())));
                return Const.SUCCESS;
            }
            return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String requestJoinClass(Integer idStudent, Integer idClass) {
        try {
            if (studentRepository.existsById(idStudent) && classroomRepository.existsById(idClass)) {
                Student student = studentRepository.getById(idStudent);
                Classroom classroom = classroomRepository.getById(idClass);
                Teacher teacher = teacherRepository.getById(classroom.getIdTeachers());
                notificationRepository.save(new Notification(teacher.getIdTeacher(),
                        "Request join class " + classroom.getNameClass() + " by " + student.toDTO(rateRepository.findByIdEvualated(student.getIdStudent())
                                .stream().map(rate -> new RateDTO(rate.getPoint(), rate.getComment())).collect(Collectors.toList())).toString(),
                        "requestJoinClass " + student.getIdStudent().toString() + " " + classroom.getIdClass(),
                        new Timestamp(System.currentTimeMillis())));
                return Const.SUCCESS;
            }
            return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public String createClass(ClassroomRequest classroom, Integer idOwner) {
        return null;
    }
}
