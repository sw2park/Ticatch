package com.danaojo.ticatch.order.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.danaojo.ticatch.order.DTO.PerformanceEntity;
import com.danaojo.ticatch.order.service.PerformanceService;

@Component
public class Test implements CommandLineRunner {

    @Autowired
    private PerformanceService performanceService;

    @Override
    public void run(String... args) throws Exception {
        // 데이터 저장
    	PerformanceEntity performance = new PerformanceEntity();
//    	performance.setPerformanceId("PERF001");
//    	performance.setPrice(50000);

     
    	// 값 저장
//        performanceService.savePerformance(performance);

    }
}
