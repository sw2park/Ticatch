package com.danaojo.login.web.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danaojo.login.web.member.dto.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByLoginId(String loginId);
}
