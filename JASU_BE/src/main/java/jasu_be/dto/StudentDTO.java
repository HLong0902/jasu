package jasu_be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDTO {
    private Integer idStudent;
    private String fullName;
    private Integer age;
    private String address;
    private String sex;
    private String avatar;
    private List<RateDTO> rate;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentDTO that = (StudentDTO) o;
        return idStudent == that.idStudent && Objects.equals(fullName, that.fullName) && Objects.equals(age, that.age) && Objects.equals(address, that.address) && Objects.equals(sex, that.sex);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idStudent, fullName, age, address, sex);
    }
}
