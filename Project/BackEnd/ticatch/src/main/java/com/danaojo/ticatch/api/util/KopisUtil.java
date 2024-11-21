package com.danaojo.ticatch.api.util;

import java.util.ArrayList;
import java.util.List;

import com.danaojo.ticatch.api.kopis.dto.ConcertListDTO;
import com.danaojo.ticatch.api.repository.PerformList;

public class KopisUtil {
	// DB 저장용 
	public List<PerformList> returnPerformList(List<ConcertListDTO> list) {
		List<PerformList> pList = new ArrayList<>();
		
		for(int i=0; i<list.size(); i++) {
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
}