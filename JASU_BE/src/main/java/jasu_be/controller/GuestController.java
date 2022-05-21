package jasu_be.controller;

import jasu_be.dto.requestdto.StudentRequest;
import jasu_be.dto.requestdto.TeacherRequest;
import jasu_be.message.CommonController;
import jasu_be.payload.request.LoginRequest;
import jasu_be.payload.request.SignupRequest;
import jasu_be.services.ClassroomService;
import jasu_be.services.TeacherService;
import jasu_be.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("api/guest")
public class GuestController extends CommonController {
    @Autowired
    private ClassroomService classroomService;
    @Autowired
    private TeacherService teacherService;
    @Autowired
    private UserService userService;

    @PostMapping("signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        return toSuccessResult(userService.registerUser(signUpRequest));
    }

    @PutMapping("existsByUsername")
    public ResponseEntity existsByUsername(@RequestParam String username){
        return toSuccessResult(userService.existsByUsername(username));
    }

    @PutMapping("existsByPhone")
    public ResponseEntity existPhone(@RequestParam String phone){
        return toSuccessResult(userService.existsByPhone(phone));
    }

    @PutMapping("existsByEmail")
    public ResponseEntity existsByEmail(@RequestParam String email){
        return toSuccessResult(userService.existsByEmail(email));
    }

    @PostMapping("registrationStudentNew")
    public ResponseEntity<?> registrationStudentNew(@RequestBody StudentRequest student) {
        return toSuccessResult(userService.registrationStudentNew(student));
    }

    @PostMapping("registrationTeacherNew")
    public ResponseEntity<?> registrationTeacherNew(@RequestBody TeacherRequest student) {
        return toSuccessResult(userService.registrationTeacherNew(student));
    }

    @PostMapping("registrationStudentFromGuest")
    public ResponseEntity<?> registrationStudentFromGuest(@RequestBody StudentRequest student) {
        return toSuccessResult(userService.registrationStudentFromGuest(student));
    }

    @PostMapping("registrationTeacherFromGuest")
    public ResponseEntity<?> registrationTeacherFromGuest(@RequestBody TeacherRequest teacherRequest) {
        return toSuccessResult(userService.registrationTeacherFromGuest(teacherRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return userService.authenticateUser(loginRequest);
    }

    @GetMapping("allClass")
    public ResponseEntity<?> getAllClasses() {
        return toSuccessResult(classroomService.getAllClassesGuest());
    }

    @GetMapping("allTeacher")
    public ResponseEntity<?> getAllTeacher() {
        return toSuccessResult(teacherService.getAllTeachersGuest());
    }

}
