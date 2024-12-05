package com.danaojo.ticatch.loginController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.danaojo.ticatch.loginDTO.LoginForm;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class LoginController {
	
	@GetMapping("/login")
	public String loginForm(@ModelAttribute("loginForm") LoginForm loginForm) {
		return "login/loginForm";
	}
}
