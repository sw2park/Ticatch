package com.danaojo.login.web.member.dto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "MEMBER")
@Getter
@Setter
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_seq_generator")
    @SequenceGenerator(name = "member_seq_generator", sequenceName = "MEMBER_SEQ", allocationSize = 1)
    @Column(name = "SEQ_USER_ID")
    private Long id;

    @Column(name = "user_id", nullable = false, unique = true)
    private String loginId;
    

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "create_date", updatable = false)
    private LocalDateTime createDate;

    @Column(name = "update_date")
    private LocalDateTime updateDate;

    @PrePersist
    protected void onCreate() {
        if (this.createDate == null) {
            this.createDate = LocalDateTime.now();
        }
        this.updateDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updateDate = LocalDateTime.now();
    }
}
