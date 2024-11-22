package com.danaojo.ticatch.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.api.kopis.Kopis;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String test() {
    	Kopis kopis = new Kopis();
    	String data = kopis.callConcertList();
    	System.out.println("응답");
<<<<<<< HEAD
        return "srping hello!!";
=======
        return data;
>>>>>>> bb328dfee110a9a892d373f719a023ded2c2a8c0
    }
}