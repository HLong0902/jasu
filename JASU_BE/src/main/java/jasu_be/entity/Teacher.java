package jasu_be.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "teachers", schema = "jasu", catalog = "")
public class Teacher {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_teacher", nullable = false)
    private Integer idTeacher;
    @Basic
    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;
    @Basic
    @Column(name = "age", nullable = true)
    private Integer age;
    @Basic
    @Column(name = "address", nullable = true, length = 100)
    private String address;
    @Basic
    @Column(name = "sex", nullable = true)
    private Integer sex;
    @Basic
    @Column(name = "cv", nullable = true, length = 255)
    private String cv;
    @Basic
    @Column(name = "level", nullable = true)
    private Integer level;

    @Column(name = "avatar")
    private String avatar;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Teacher teacher = (Teacher) o;
        return idTeacher == teacher.idTeacher && Objects.equals(fullName, teacher.fullName) && Objects.equals(age, teacher.age) && Objects.equals(address, teacher.address) && Objects.equals(sex, teacher.sex) && Objects.equals(cv, teacher.cv) && Objects.equals(level, teacher.level);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTeacher, fullName, age, address, sex, cv, level);
    }
}
