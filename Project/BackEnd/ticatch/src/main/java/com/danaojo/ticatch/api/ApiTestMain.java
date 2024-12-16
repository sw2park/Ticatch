package com.danaojo.ticatch.api;



import com.danaojo.ticatch.api.kopis.Kopis;
import com.danaojo.ticatch.api.kopis.KopisApiController;



public class ApiTestMain {

	public static void main(String[] args) throws JsonMappingException, JsonProcessingException {

		KopisApiController k = new KopisApiController();
		
//		String facilityName = "부산문화회관";
//		System.out.println(k.callFacilityList(facilityName));
//		String facilityId = "FC000167";
//		System.out.println(k.callFacilityDetail(facilityId));
		
		//System.out.println(k.callConcertList());
		Kopis kp = new Kopis();
		kp.PfDBList();

	}
}
