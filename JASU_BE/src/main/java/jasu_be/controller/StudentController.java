package jasu_be.controller;

import jasu_be.dto.requestdto.ClassroomRequest;
import jasu_be.message.CommonController;
import jasu_be.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@PreAuthorize("hasRole('STUDENT')")
public class StudentController extends CommonController {
    @Autowired
    private StudentService studentService;

    @PostMapping("resquestJoinClass")
    public ResponseEntity<?> requestJoinClass(@RequestParam Integer idStudent, @RequestParam() Integer idClass) {
        return toSuccessResult(studentService.requestJoinClass(idStudent, idClass));
    }


    @PostMapping("newClass")
    public ResponseEntity<?> createClass(@RequestBody ClassroomRequest classroom, @RequestParam Integer idOwner) {
        return toSuccessResult(studentService.createClass(classroom, idOwner));
    }

    @PostMapping("inviteTeacher")
    public ResponseEntity<?> inviteTeacher(@RequestParam Integer idClass, @RequestParam Integer idTeacher, @RequestParam Integer idUser) {
        return toSuccessResult(studentService.inviteTeacher(idClass, idTeacher, idUser));
    }

}
