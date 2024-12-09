package com.danaojo.login.web.login.service;

import org.springframework.stereotype.Service;

import com.danaojo.login.web.member.dto.Member;
import com.danaojo.login.web.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository memberRepository;

    public Member login(String loginId, String password) {
        Optional<Member> optionalMember = memberRepository.findByLoginId(loginId);
        return optionalMember.filter(member -> member.getPassword().equals(password)).orElse(null);
    }
}
