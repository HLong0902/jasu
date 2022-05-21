package jasu_be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestDTO {
    private Integer idRequest;
    private Integer idSender;
    private Integer idReceiver;
    private String code;
    private String notes;
    private Integer status;
}
