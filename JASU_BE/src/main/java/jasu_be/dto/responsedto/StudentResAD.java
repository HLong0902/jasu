package jasu_be.dto.responsedto;

import jasu_be.entity.Rate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentResAD {
    private Integer idStudent;
    private String fullName;
    private Integer age;
    private String address;
    private String sex;
    private List<Rate> rate;
}
