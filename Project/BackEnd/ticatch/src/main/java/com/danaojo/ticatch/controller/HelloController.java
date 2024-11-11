package com.danaojo.ticatch.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String test() {
    	System.out.println("응답");
        return "srping hello";
    }
}