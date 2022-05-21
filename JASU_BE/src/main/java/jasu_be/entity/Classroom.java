package jasu_be.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "classrooms", schema = "jasu", catalog = "")
public class Classroom {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_class", nullable = false)
    private Integer idClass;

    @Basic
    @Column(name = "name_class", nullable = false)
    private String nameClass;

    @Basic
    @Column(name = "end_at")
    private Timestamp endAt;
    @Basic
    @Column(name = "grade")
    private String grade;
    @Basic
    @Column(name = "id_students")
    private String idStudents;
    @Basic
    @Column(name = "id_teachers")
    private Integer idTeachers;
    @Basic
    @Column(name = "location")
    private String location;
    @Basic
    @Column(name = "max_allow")
    private String maxAllow;
    @Basic
    @Column(name = "min_allow")
    private String minAllow;
    @Basic
    @Column(name = "price")
    private String price;
    @Basic
    @Column(name = "scheduler")
    private String scheduler;
    @Basic
    @Column(name = "start_at")
    private Timestamp startAt;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "subject")
    private String subject;
    @Basic
    @Column(name = "onl_off")
    private Integer onlOff;
    @Basic
    @Column(name = "owner", nullable = false)
    private Integer owner;
    @Basic
    @Column(name = "voice_region")
    private String voiceRegion;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Classroom classroom = (Classroom) o;
        return idClass == classroom.idClass &&
                Objects.equals(scheduler, classroom.scheduler) &&
                Objects.equals(endAt, classroom.endAt) &&
                Objects.equals(grade, classroom.grade) &&
                Objects.equals(idStudents, classroom.idStudents) &&
                Objects.equals(idTeachers, classroom.idTeachers) &&
                Objects.equals(location, classroom.location) &&
                Objects.equals(maxAllow, classroom.maxAllow) &&
                Objects.equals(minAllow, classroom.minAllow) &&
                Objects.equals(price, classroom.price) &&
                Objects.equals(startAt, classroom.startAt) &&
                Objects.equals(status, classroom.status) &&
                Objects.equals(subject, classroom.subject) &&
                Objects.equals(onlOff, classroom.onlOff) &&
                Objects.equals(owner, classroom.owner) &&
                Objects.equals(voiceRegion, classroom.voiceRegion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idClass, scheduler, endAt, grade, idStudents, idTeachers, location, maxAllow, minAllow, price, startAt, status, subject, onlOff, owner, voiceRegion);
    }

}
