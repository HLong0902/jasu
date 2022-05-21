package jasu_be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherDTO {
    private Integer idTeacher;
    private String fullName;
    private Integer age;
    private String address;
    private Integer sex;
    private String cv;
    private Integer level;

    private List<RateDTO> rateDTOS;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherDTO teacherDTO = (TeacherDTO) o;
        return idTeacher == teacherDTO.idTeacher && Objects.equals(fullName, teacherDTO.fullName) && Objects.equals(age, teacherDTO.age) && Objects.equals(address, teacherDTO.address) && Objects.equals(sex, teacherDTO.sex) && Objects.equals(cv, teacherDTO.cv) && Objects.equals(level, teacherDTO.level);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTeacher, fullName, age, address, sex, cv, level);
    }
}
