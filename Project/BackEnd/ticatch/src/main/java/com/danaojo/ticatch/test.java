package com.danaojo.ticatch;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("http://localhost:9090/")
public class test {
	
	@GetMapping("http://localhost:9090/")
	public String name() {
		return "index";
	}

	
}	
