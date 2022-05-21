package jasu_be.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
@Table(name = "rates", schema = "jasu", catalog = "")
public class Rate {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_rate", nullable = false)
    private Integer idRate;
    @Basic
    @Column(name = "id_reviewer", nullable = false)
    private Integer idReviewer;
    @Basic
    @Column(name = "id_evualated", nullable = false)
    private Integer idEvualated;
    @Basic
    @Column(name = "point", nullable = false)
    private Integer point;
    @Basic
    @Column(name = "comment", nullable = true, length = 450)
    private String comment;
    @Basic
    @Column(name = "img", nullable = true, length = 450)
    private String img;
    @Basic
    @Column(name = "vid", nullable = true, length = 450)
    private String vid;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rate rate = (Rate) o;
        return idRate == rate.idRate && idReviewer == rate.idReviewer && idEvualated == rate.idEvualated && point == rate.point && Objects.equals(comment, rate.comment) && Objects.equals(img, rate.img) && Objects.equals(vid, rate.vid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRate, idReviewer, idEvualated, point, comment, img, vid);
    }
}
