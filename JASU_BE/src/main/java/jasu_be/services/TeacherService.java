package jasu_be.services;

import jasu_be.dto.TeacherDTO;
import jasu_be.dto.requestdto.ClassroomRequest;
import jasu_be.dto.responsedto.TeacherResAD;
import jasu_be.entity.Classroom;
import jasu_be.entity.Notification;
import jasu_be.entity.Student;
import jasu_be.entity.Teacher;
import jasu_be.message.Const;
import jasu_be.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeacherService {
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

    @Autowired

    public List<TeacherDTO> getAllTeachersGuest() {
        List<TeacherDTO> result;
        try {
            result = teacherRepository.findAll()
                    .stream().map(t -> new TeacherDTO(
                            t.getIdTeacher(), t.getFullName(),
                            t.getAge(), t.getAddress(),
                            t.getAge(), t.getCv(),
                            t.getLevel(), null
                    )).collect(Collectors.toList());

        } catch (Exception e) {
            return null;
        }
        return result;
    }

    public List<TeacherResAD> getAllTeachersAdmin() {
        List<TeacherResAD> result;
        try {
            result = teacherRepository.findAll()
                    .stream().map(t -> new TeacherResAD(
                            t.getIdTeacher(), t.getFullName(),
                            t.getAge(), t.getAddress(),
                            t.getAge(), t.getCv(),
                            t.getLevel(), rateRepository.findByIdEvualated(t.getIdTeacher())
                    )).collect(Collectors.toList());

        } catch (Exception e) {
            return null;
        }
        return result;
    }

    public String handleAcceptStudent(Integer idStudent, Integer idClass, Integer idTeacher, boolean checkAccept) {
        try {
            if (checkAccept) {
                if (studentRepository.existsById(idStudent) && classroomRepository.existsById(idClass) && teacherRepository.existsById(idTeacher)) {
                    Student student = studentRepository.getById(idStudent);
                    Classroom classroom = classroomRepository.getById(idClass);
                    Teacher teacher = teacherRepository.getById(idTeacher);

                    StringBuilder students = new StringBuilder(classroom.getIdStudents());
                    students.append(" " + student.getIdStudent());
                    classroom.setIdStudents(String.valueOf(students));
                    classroomRepository.save(classroom);

                    notificationRepository.save(new Notification(student.getIdStudent(),
                            "Accepted join class " + classroom.getNameClass() + " by " + teacher.getFullName(),
                            "acceptJoin " + student.getIdStudent() + " " + classroom.getIdClass(),
                            new Timestamp(System.currentTimeMillis())));
                    return Const.SUCCESS;
                }
            } else {
                if (studentRepository.existsById(idStudent) && classroomRepository.existsById(idClass) && teacherRepository.existsById(idTeacher)) {
                    Student student = studentRepository.getById(idStudent);
                    Classroom classroom = classroomRepository.getById(idClass);
                    Teacher teacher = teacherRepository.getById(idTeacher);

                    notificationRepository.save(new Notification(student.getIdStudent(),
                            "Reject join class " + classroom.getNameClass() + " by " + teacher.getFullName(),
                            "rejectJoinClass " + student.getIdStudent().toString() + " " + classroom.getIdClass(),
                            new Timestamp(System.currentTimeMillis())));
                    return Const.SUCCESS;
                }
            }
            return Const.FAIL;
        } catch (Exception e) {
            return e.toString();
        }
    }



    public String createClass(ClassroomRequest classroom, Integer idOwner) {
        try {
            Classroom newClass = new Classroom(0, classroom.getNameClass(),
                     classroom.getEndAt(),
                    classroom.getGrade(), "", idOwner,
                    classroom.getLocation(), classroom.getMaxAllow(),
                    classroom.getMinAllow(), classroom.getPrice(),
                    classroom.getScheduler(),
                    classroom.getStartAt(), classroom.getStatus(),
                    classroom.getSubject(), classroom.getOnlOff(),
                    idOwner,
                    classroom.getVoiceRegion());
            classroomRepository.save(newClass);
            return Const.SUCCESS;
        } catch (Exception e) {
            return e.toString();
        }
    }

}
