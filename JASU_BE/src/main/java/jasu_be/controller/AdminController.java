package jasu_be.controller;

import jasu_be.dto.responsedto.ClassroomResAD;
import jasu_be.dto.responsedto.TeacherResAD;
import jasu_be.message.CommonController;
import jasu_be.services.ClassroomService;
import jasu_be.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController extends CommonController {

    @Autowired
    private ClassroomService classroomService;
    @Autowired
    private TeacherService teacherService;

    @GetMapping("allClass")
    public ResponseEntity<?> getAllClasses() {
        List<ClassroomResAD> allClassesAdmin = classroomService.getAllClassesAdmin();
        return toSuccessResult(allClassesAdmin);
    }

    @GetMapping("allTeacher")
    public ResponseEntity<?> getAllTeacher(){
        List<TeacherResAD> allTeachersAdmin = teacherService.getAllTeachersAdmin();
        return toSuccessResult(allTeachersAdmin);
    }


}
