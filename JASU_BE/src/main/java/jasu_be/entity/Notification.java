package jasu_be.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@Table(name = "notifications", schema = "jasu", catalog = "")
public class Notification {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_noti", nullable = false)
    private Integer idNoti;

    @Column(name = "id_account", nullable = false)
    private Integer idAccount;
    @Basic
    @Column(name = "content", nullable = false, length = 450)
    private String content;

    @Basic
    @Column(name = "notes", length = 100)
    private String note;

    @Basic
    @Column(name = "created_time", nullable = false)
    private Timestamp createdTime;

    @Basic
    @Column(name = "status")
    private Integer status;

    public Notification(Integer idAccount, String content, String note, Timestamp createdTime) {
        this.idAccount = idAccount;
        this.content = content;
        this.createdTime = createdTime;
        this.note = note;
        this.status = 0;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Notification that = (Notification) o;
        return idAccount == that.idAccount &&
                Objects.equals(content, that.content) &&
                Objects.equals(createdTime, that.createdTime) &&
                Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idAccount, content, createdTime);
    }
}
