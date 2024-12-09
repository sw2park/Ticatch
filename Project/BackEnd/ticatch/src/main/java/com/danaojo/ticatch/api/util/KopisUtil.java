package com.danaojo.ticatch.api.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import com.danaojo.ticatch.api.kopis.dto.PFJoinDTO;
import com.danaojo.ticatch.mypage.entity.PFJoin;

public class KopisUtil {
	// 오늘 날짜 구해서 +31일 한 후 yyyyMMdd 형태로 반환 메소드
	public String returnAfterday() {
	    LocalDate nowDate = LocalDate.now();
	    LocalDate afterDate = nowDate.plusDays(31);
	    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
	    
	    return afterDate.format(formatter);
	}
	
	// 오늘 날짜 구해서 yyyyMMdd 형태로 반환 메소드
	public String returnNowToday() { 
		LocalDate now = LocalDate.now();
		DateTimeFormatter form = DateTimeFormatter.ofPattern("yyyyMMdd");
		String formNow = now.format(form);
		
		return formNow;
	}
	
	// PFJOIN DB 저장용 변환 메소드
	public List<PFJoin> returnPFJoinList(List<PFJoinDTO> list){
		List<PFJoin> result = new ArrayList<>();
		
		for(int i=0; i<list.size(); i++) {
			PFJoin pf = new PFJoin();
			
			pf.setP_id(list.get(i).getPf_id());
			pf.setP_title(list.get(i).getPf_title());
			pf.setP_poster(list.get(i).getPf_poster());
			pf.setP_start_date(list.get(i).getPf_start_date());
			pf.setP_end_date(list.get(i).getPf_end_date());
			pf.setPd_location(list.get(i).getPf_location());
			pf.setPd_hall_name(list.get(i).getPf_hall_name());
			if(list.get(i).getPf_cast().equals(" ")) {
				continue;
//				pf.setPd_cast(null);
			} else {
				pf.setPd_cast(list.get(i).getPf_cast());				
			}
			pf.setPd_runtime(list.get(i).getPf_runtime());
			pf.setPd_seatprice(list.get(i).getPf_seatprice());
			pf.setP_genre(list.get(i).getPf_genre());
			pf.setPd_child(list.get(i).getPf_child());
			pf.setPd_img(list.get(i).getPf_img());
			pf.setPl_location_sido(list.get(i).getPf_location_sido());
			pf.setPl_location_gun(list.get(i).getPf_location_gun());
			pf.setFd_phone(list.get(i).getPf_phone());
			pf.setFd_addr(list.get(i).getPf_addr());
			pf.setFd_latitude(list.get(i).getPf_la());
			pf.setFd_longitude(list.get(i).getPf_lo());
			pf.setPd_time(list.get(i).getPf_time());
			
			result.add(pf);
		}
		return result;
	}
	
	// PFJoinDB 상세이미지 저장용
	public String concatDetailImage(List<String> list) {
		String result = "";
		
		for(String str : list) {
			if(str.equals(" ")) {
				continue;
			} else {
				result += str + "|";
			}
		}
		return result;
	}
}