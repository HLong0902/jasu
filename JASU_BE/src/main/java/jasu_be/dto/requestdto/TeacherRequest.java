package jasu_be.dto.requestdto;

import jasu_be.entity.ERole;
import jasu_be.entity.Teacher;
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
public class TeacherRequest {
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

    private String fullname;
    private Integer age;
    private String address;
    private Integer sex;
    private String cv;
    private Integer level;
    private String avatar;

    public Teacher toEntity(){
        return new Teacher(
                0, this.getFullname(), this.getAge(),
                this.getAddress(), this.getSex(),
                this.getCv(), this.getLevel(), this.getAvatar()
        );
    }
}
