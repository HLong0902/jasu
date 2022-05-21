package jasu_be.dto.responsedto;

import jasu_be.entity.Rate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherResAD {
    private Integer idTeacher;
    private String fullName;
    private Integer age;
    private String address;
    private Integer sex;
    private String cv;
    private Integer level;

    private List<Rate> rates;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherResAD teacherResAD = (TeacherResAD) o;
        return idTeacher == teacherResAD.idTeacher && Objects.equals(fullName, teacherResAD.fullName) && Objects.equals(age, teacherResAD.age) && Objects.equals(address, teacherResAD.address) && Objects.equals(sex, teacherResAD.sex) && Objects.equals(cv, teacherResAD.cv) && Objects.equals(level, teacherResAD.level);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTeacher, fullName, age, address, sex, cv, level);
    }
}