package jasu_be.controller;

import jasu_be.dto.StudentDTO;
import jasu_be.dto.TeacherDTO;
import jasu_be.dto.requestdto.ClassroomRequest;
import jasu_be.message.CommonController;

import jasu_be.services.ClassroomService;
import jasu_be.services.TeacherService;
import jasu_be.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/user")
@PreAuthorize("hasRole('STUDENT') or hasRole('TEACHER') or hasRole('GUEST')")
public class UserController extends CommonController {
    @Autowired
    private UserService userService;
    @Autowired
    private ClassroomService classroomService;
    @Autowired
    private TeacherService teacherService;

    @GetMapping("allClass")
    public ResponseEntity<?> getAllClasses() {
        return toSuccessResult(classroomService.getAllClassesSigned());
    }

    @GetMapping("allTeacher")
    public ResponseEntity<?> getAllTeacher() {
        return toSuccessResult(teacherService.getAllTeachersAdmin());
    }

    @PostMapping("newClass")
    public ResponseEntity<?> createClass(@RequestBody ClassroomRequest classroom, @RequestParam Integer idOwner) {
        return toSuccessResult(userService.createClass(classroom, idOwner));
    }

    @PostMapping("updateAccountInfo")
    public ResponseEntity<?> updateUserInfo(@RequestParam Integer idAccount, @RequestParam(required = false) String pw, @RequestParam(required = false) String email) {
        return toSuccessResult(userService.updateAccountInfo(idAccount, pw, email));
    }

    @PostMapping("updateStudentInfo")
    public ResponseEntity<?> updateStudentInfo(@RequestBody StudentDTO student) {
        return toSuccessResult(userService.updateStudentInfo(student));
    }

    @PostMapping("updateTeacherInfo")
    public ResponseEntity<?> updateTeacherInfo(@RequestBody TeacherDTO teacher) {
        return toSuccessResult(userService.updateTeacherInfo(teacher));
    }

    @GetMapping("attemptedClass")
    public ResponseEntity<?> allAttemptClass(@RequestParam Integer idUser) {
        return toSuccessResult(userService.allAttemptClass(idUser));
    }

    @GetMapping("ownClass")
    public ResponseEntity<?> allOwnClass(@RequestParam Integer idUser) {
        return toSuccessResult(userService.allOwnClass(idUser));
    }

    @GetMapping("classInfo")
    public ResponseEntity<?> getClassInfo(@RequestParam Integer idClass){
        return toSuccessResult(userService.getClassInfo(idClass));
    }

    @GetMapping("confirmTeacher")
    public ResponseEntity<?> confirmTeacher(@RequestParam Integer idClass, @RequestParam Integer idTeacher, @RequestParam Integer idOwner){
        return toSuccessResult(userService.confirmTeacher(idClass, idTeacher, idOwner));
    }
}





