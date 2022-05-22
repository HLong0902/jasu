package jasu_be.dto.requestdto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassroomRequest {
    private String scheduler;
    private String nameClass;
    private String nameTeacher;
    private Timestamp endAt;
    private String grade;
    private Integer studentCount;
    private String location;
    private String maxAllow;
    private String minAllow;
    private String price;
    private Timestamp startAt;
    private String status;
    private String subject;
    private Integer onlOff;
    private String voiceRegion;
    private String avatar;
}
