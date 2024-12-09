package com.danaojo.login.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.danaojo.login.web.login.dto.LoginForm;
import com.danaojo.login.web.login.service.LoginService;
import com.danaojo.login.web.member.dto.Member;
import com.danaojo.login.web.sesstion.SessionConst;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @GetMapping("/login")
    public String loginForm(@ModelAttribute("loginForm") LoginForm loginForm) {
        return "login/loginForm";
    }

    @PostMapping("/login")
    public String login(
            @ModelAttribute LoginForm form,
            Model model,
            HttpServletRequest request,
            @RequestParam(defaultValue = "/") String redirectURL) {

        Member loginMember = loginService.login(form.getLoginId(), form.getPassword());

        if (loginMember == null) {
            model.addAttribute("msg", "로그인에 실패하였습니다. 아이디와 비밀번호를 확인하세요.");
            return "login/loginForm";
        }

        // 세션 생성 및 로그인 정보 저장
        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember);

        return "redirect:" + redirectURL;
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return "redirect:/";
    }
}
