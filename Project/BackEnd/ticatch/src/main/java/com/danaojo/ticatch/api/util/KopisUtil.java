package com.danaojo.ticatch.api.util;

import java.util.ArrayList;
import java.util.List;

import com.danaojo.ticatch.api.kopis.dto.PFJoinDTO;
import com.danaojo.ticatch.api.repository.PFJoin;

public class KopisUtil {
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
}