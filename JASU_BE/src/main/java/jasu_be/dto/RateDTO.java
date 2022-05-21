package jasu_be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RateDTO {
    private Integer point;
    private String comment;

    @Override
    public String toString() {
        return "{ " + point + ", " + comment + " }";
    }
}
