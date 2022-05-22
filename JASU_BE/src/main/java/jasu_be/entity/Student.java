package jasu_be.entity;

import jasu_be.dto.RateDTO;
import jasu_be.dto.StudentDTO;
import jasu_be.dto.responsedto.StudentResAD;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "students", schema = "jasu", catalog = "")
public class Student {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_student", nullable = false)
    private Integer idStudent;
    @Basic
    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;
    @Basic
    @Column(name = "age")
    private Integer age;
    @Basic
    @Column(name = "address", nullable = true, length = 100)
    private String address;
    @Basic
    @Column(name = "sex", nullable = false, length = 45)
    private String sex;

    @Basic
    @Column(name = "avatar", length = 450)
    private String avatar;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return idStudent == student.idStudent && Objects.equals(fullName, student.fullName) && Objects.equals(age, student.age) && Objects.equals(address, student.address) && Objects.equals(sex, student.sex);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idStudent, fullName, age, address, sex);
    }

    public StudentDTO toDTO(List<RateDTO> rateDTOS){
        return new StudentDTO(this.getIdStudent(), this.getFullName(), this.getAge(), this.getAddress(), this.getSex(),this.avatar, rateDTOS);
    }

    public StudentResAD toRes(List<Rate> rates){
        return new StudentResAD(this.getIdStudent(), this.getFullName(), this.getAge(), this.getAddress(), this.getSex(), rates);
    }

}
