package jasu_be.controller;

import jasu_be.dto.requestdto.ClassroomRequest;
import jasu_be.message.CommonController;
import jasu_be.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/teacher")
@PreAuthorize("hasRole('TEACHER')")
public class TeacherController extends CommonController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping("handleAcceptStudent")
    public ResponseEntity<?> handleAcceptStudent(@RequestParam Integer idStudent, @RequestParam() Integer idClass, @RequestParam Integer idTeacher, @RequestParam boolean checkAccept) {
        return toSuccessResult(teacherService.handleAcceptStudent(idStudent, idClass, idTeacher, checkAccept));
    }

    @PostMapping("newClass/")
    public ResponseEntity<?> createClass(@RequestBody ClassroomRequest classroom, @RequestParam Integer idOwner) {
        return toSuccessResult(teacherService.createClass(classroom, idOwner));
    }
}
