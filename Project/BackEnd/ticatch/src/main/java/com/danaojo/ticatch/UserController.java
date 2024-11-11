package com.danaojo.ticatch;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
	@GetMapping("/data")
	public String getData() {
		return "Hello from Spring Boot!";
	}
}