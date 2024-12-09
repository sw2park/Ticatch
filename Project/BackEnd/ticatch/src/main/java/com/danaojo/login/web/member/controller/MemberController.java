package com.danaojo.login.web.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.danaojo.login.web.member.dto.Member;
import com.danaojo.login.web.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;

    // 회원 등록 폼
    @GetMapping("/members/add")
    public String addForm(@ModelAttribute("member") Member member) {
        return "members/addMemberForm";
    }

    // 회원 등록 처리
    @PostMapping("/members/add")
    public String saveMember(@ModelAttribute Member member, Model model) {
        // 중복 아이디 체크
        if (memberRepository.findByLoginId(member.getLoginId()).isPresent()) {
            model.addAttribute("error", "이미 존재하는 아이디입니다.");
            return "members/addMemberForm"; // 에러 메시지와 함께 다시 폼으로 이동
        }

        // 회원 저장
        memberRepository.save(member);
        return "redirect:/"; // 메인 페이지로 리다이렉트
    }
}
