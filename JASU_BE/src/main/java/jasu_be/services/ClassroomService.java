package jasu_be.services;

import jasu_be.dto.ClassroomDTO;
import jasu_be.dto.StudentDTO;
import jasu_be.dto.responsedto.ClassroomResAD;
import jasu_be.dto.responsedto.StudentResAD;
import jasu_be.entity.Classroom;
import jasu_be.entity.Rate;
import jasu_be.entity.Student;
import jasu_be.repository.ClassroomRepository;
import jasu_be.repository.RateRepository;
import jasu_be.repository.StudentRepository;
import jasu_be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClassroomService {
    @Autowired
    private ClassroomRepository classroomRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private RateRepository rateRepository;

    public List<ClassroomDTO> getAllClassesGuest() {
        List<ClassroomDTO> result = new ArrayList<>();
        try {
            List<Classroom> classrooms = classroomRepository.findAll();
            for (Classroom c : classrooms) {
                String nameTeacher = teacherRepository.getById(c.getIdTeachers()).getFullName();
                result.add(new ClassroomDTO(c.getIdClass(),c.getNameClass(),
                        nameTeacher, c.getEndAt(), c.getGrade(), c.getIdStudents().trim().split(" ").length,
                        c.getLocation(), c.getMaxAllow(), c.getMinAllow(),
                        c.getPrice(), c.getScheduler(), c.getStartAt(), c.getStatus(), c.getSubject(),
                        c.getOnlOff(), c.getVoiceRegion(), null));
            }
        } catch (Exception e) {
            return new ArrayList<>();
        }
        return result;
    }

    public List<ClassroomDTO> getAllClassesSigned() {
        List<ClassroomDTO> result = new ArrayList<>();
        try {
            List<Classroom> classrooms = classroomRepository.findAll();
            List<StudentDTO> students = new ArrayList<>();
            for (Classroom c : classrooms) {
                String[] listStudent = c.getIdStudents().trim().split(" ");
                for (String s : listStudent) {
                    StudentDTO student = studentRepository.getById(Integer.parseInt(s.trim())).toDTO(null);
                    students.add(student);
                }
                String nameTeacher = teacherRepository.getById(c.getIdTeachers()).getFullName();
                result.add(new ClassroomDTO(
                        c.getIdClass(), c.getNameClass(),
                        nameTeacher, c.getEndAt(), c.getGrade(), c.getIdStudents().split(" ").length,
                        c.getLocation(), c.getMaxAllow(), c.getMinAllow(),
                        c.getPrice(), c.getScheduler(), c.getStartAt(), c.getStatus(), c.getSubject(),
                        c.getOnlOff(), c.getVoiceRegion(),
                        students));
            }
        } catch (Exception e) {
            return new ArrayList<>();
        }
        return result;
    }

    public List<ClassroomResAD> getAllClassesAdmin() {
        List<ClassroomResAD> result = new ArrayList<>();
        try {
            List<Classroom> classrooms = classroomRepository.findAll();
            List<StudentResAD> students = new ArrayList<>();
            for (Classroom c : classrooms) {
                String[] listStudent = c.getIdStudents().trim().split(" ");
                for (String s : listStudent) {
                    Student student = studentRepository.getById(Integer.parseInt(s.trim()));
                    List<Rate> rates = rateRepository.findByIdEvualated(student.getIdStudent());
                    students.add(student.toRes(rates));
                }
                String nameTeacher = teacherRepository.getById(c.getIdTeachers()).getFullName();
                result.add(new ClassroomResAD(
                        c.getIdClass(), c.getScheduler(), nameTeacher,
                        c.getEndAt(), c.getGrade(), c.getIdStudents().split(" ").length,
                        c.getLocation(), c.getMaxAllow(), c.getMinAllow(),
                        c.getPrice(), c.getStartAt(), c.getStatus(), c.getSubject(),
                        c.getOnlOff(), c.getVoiceRegion(), students));
            }
        } catch (Exception e) {
            return new ArrayList<>();
        }
        return result;
    }
}
