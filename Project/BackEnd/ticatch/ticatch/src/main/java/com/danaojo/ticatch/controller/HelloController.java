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
        return data;
    }
    
//    @GetMapping("/api/save")
//    public String test() {
//    	Kopis kopis = new Kopis();
//    	List<PFJoinDTO> testList = kopis.PfDBList();
//    	String data = testList.get(0).getPf_id();
//    	for(PFJoinDTO p : testList) {
//    		data += p.getPf_id() + " | ";
//    	}
//        return data;
//    }
//    
//    @GetMapping("/detail")
//	public String test1() {
//		 
//		String testData = "ddd";
//		System.out.println(testData);
//	    return  testData;
//	}
}