package jasu_be.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Requests {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_request", nullable = false)
    private Integer idRequest;
    @Basic
    @Column(name = "id_sender", nullable = false)
    private Integer idSender;
    @Basic
    @Column(name = "id_receiver", nullable = false)
    private Integer idReceiver;
    @Basic
    @Column(name = "code", nullable = false, length = 45)
    private String code;
    @Basic
    @Column(name = "notes", nullable = true, length = 450)
    private String notes;
    @Basic
    @Column(name = "status", nullable = true)
    private Integer status;

    public Integer getIdRequest() {
        return idRequest;
    }

    public void setIdRequest(Integer idRequest) {
        this.idRequest = idRequest;
    }

    public Integer getIdSender() {
        return idSender;
    }

    public void setIdSender(Integer idSender) {
        this.idSender = idSender;
    }

    public Integer getIdReceiver() {
        return idReceiver;
    }

    public void setIdReceiver(Integer idReceiver) {
        this.idReceiver = idReceiver;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Requests requests = (Requests) o;
        return Objects.equals(idRequest, requests.idRequest) && Objects.equals(idSender, requests.idSender) && Objects.equals(idReceiver, requests.idReceiver) && Objects.equals(code, requests.code) && Objects.equals(notes, requests.notes) && Objects.equals(status, requests.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRequest, idSender, idReceiver, code, notes, status);
    }
}
