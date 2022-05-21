package jasu_be.dto.requestdto;

import jasu_be.entity.ERole;
import jasu_be.entity.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @Size(max = 50)
    @Email
    private String email;

    private Set<ERole> role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    @Size(max = 15)
    private String phone;

    private String fullName;
    private Integer age;
    private String address;
    private String sex;

    public Student toEntity(){
        return new Student(0, this.getFullName(),
                this.getAge(), this.getAddress(), this.getSex());
    }
}
