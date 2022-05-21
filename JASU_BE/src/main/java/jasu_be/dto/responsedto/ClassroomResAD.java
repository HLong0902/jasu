package jasu_be.dto.responsedto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClassroomResAD {
    private Integer idClass;
    private String scheduler;

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

    private List<StudentResAD> students;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClassroomResAD that = (ClassroomResAD) o;
        return idClass == that.getIdClass() &&
                Objects.equals(scheduler, that.scheduler) &&
                Objects.equals(endAt, that.endAt) &&
                Objects.equals(grade, that.grade) &&
                Objects.equals(location, that.location) &&
                Objects.equals(maxAllow, that.maxAllow) &&
                Objects.equals(minAllow, that.minAllow) &&
                Objects.equals(price, that.price) &&
                Objects.equals(startAt, that.startAt) &&
                Objects.equals(status, that.status) &&
                Objects.equals(subject, that.subject) &&
                Objects.equals(onlOff, that.onlOff) &&
                Objects.equals(voiceRegion, that.voiceRegion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idClass, scheduler, endAt, grade, location, maxAllow, minAllow, price, startAt, status, subject, onlOff, voiceRegion);
    }
}
