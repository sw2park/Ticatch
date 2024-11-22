package com.danaojo.ticatch.api.util;

import java.util.ArrayList;
import java.util.List;

import com.danaojo.ticatch.api.kopis.dto.ConcertDetailDTO;
import com.danaojo.ticatch.api.kopis.dto.ConcertListDTO;
import com.danaojo.ticatch.api.repository.PerformDetail;
import com.danaojo.ticatch.api.repository.PerformList;

public class KopisUtil {
	// PerformList DB 저장용
	public List<PerformList> returnPerformList(List<ConcertListDTO> list) {
		List<PerformList> pList = new ArrayList<>();

		for (int i = 0; i < list.size(); i++) {
			PerformList performList = new PerformList();

			performList.setPl_id(list.get(i).getPl_id());
			performList.setPl_title(list.get(i).getPl_title());
			performList.setPl_start_date(list.get(i).getPl_start_date());
			performList.setPl_end_date(list.get(i).getPl_end_date());
			performList.setPl_hall_name(list.get(i).getPl_hall_name());
			performList.setPl_poster(list.get(i).getPl_poster());
			performList.setPl_location(list.get(i).getPl_location());
			performList.setPl_genre(list.get(i).getPl_genre());

			pList.add(performList);
		}
		return pList;
	}

	// ID 뽑아서 전달용 메서드
	public List<String> returnPerformId(List<ConcertListDTO> performId) {
		List<String> idList = new ArrayList<>();

		for (int i = 0; i < performId.size(); i++) {
			String id;
			id = performId.get(i).getPl_id();
			
			idList.add(id);
		}

		return idList;
	}
	
	// PerformDetail DB 저장용	
	public List<PerformDetail> returnPerformDetail(List<ConcertDetailDTO> list){
		List<PerformDetail> detailList = new ArrayList<>();
		
		for(int i=0; i < list.size(); i++) {
			PerformDetail detail = new PerformDetail();
			
			detail.setPd_id(list.get(i).getPd_id());
			detail.setPd_title(list.get(i).getPd_title());
			detail.setPd_start(list.get(i).getPd_start());
			detail.setPd_end(list.get(i).getPd_end());
			detail.setPd_location(list.get(i).getPd_location());
			detail.setPd_cast(list.get(i).getPd_cast());
			detail.setPd_crew(list.get(i).getPd_crew());
			detail.setPd_runtime(list.get(i).getPd_runtime());
			detail.setPd_seatprice(list.get(i).getPd_seatprice());
			detail.setPd_poster(list.get(i).getPd_poster());
			detail.setPd_genre(list.get(i).getPd_genre());
			detail.setPd_openturn(list.get(i).getPd_openturn());
			detail.setPd_visit(list.get(i).getPd_visit());
			detail.setPd_child(list.get(i).getPd_child());
			// 아직 미완성이라 주석처리 후 임의값 지정
			detail.setPd_img("상세 이미지 들어갈거에요");
			detail.setPd_time(list.get(i).getPd_time());
			
			detailList.add(detail);
		}
		
		return detailList;
	}
}