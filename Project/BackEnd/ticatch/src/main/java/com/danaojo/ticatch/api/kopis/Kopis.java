package com.danaojo.ticatch.api.kopis;

import java.util.ArrayList;
import java.util.List;

import com.danaojo.ticatch.api.kopis.dto.ConcertDetailDTO;
import com.danaojo.ticatch.api.kopis.dto.ConcertListDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

public class Kopis extends KopisApiController {
	public List<ConcertListDTO> apiConcertList() throws JsonMappingException, JsonProcessingException {
		String concertStr = callConcertList();
		// 테스트 출력
//		System.out.println(concertStr);
		XmlMapper xmlMapper = new XmlMapper();
		// xmlMapper 설정, 불필요한거 스킵
		xmlMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		List<ConcertListDTO> concertList = new ArrayList<>();

		concertList = xmlMapper.readValue(concertStr.toString(), new TypeReference<List<ConcertListDTO>>() {
		});

		// 테스트 출력
		for (ConcertListDTO cDto : concertList) {
			System.out.println("공연ID : " + cDto.getPl_id());
			System.out.println("공연명 : " + cDto.getPl_hall_name());
			System.out.println("공연시작일 : " + cDto.getPl_start_date());
			System.out.println("공연종료일 : " + cDto.getPl_end_date());
			System.out.println("공연시설명 : " + cDto.getPl_hall_name());
			System.out.println("포스터이미지 : " + cDto.getPl_poster());
			System.out.println("공연지역 : " + cDto.getPl_location());
			System.out.println("공연장르 : " + cDto.getPl_genre());
			System.out.println("--------------------------------");
			System.out.println();
		}
		return concertList;
	}

	public List<ConcertDetailDTO> concertDetail(String concertId) throws JsonMappingException, JsonProcessingException {
		String detailList = callConcertDetail(concertId);
		
		List<ConcertDetailDTO> detailDTO = new ArrayList<>();
		
		XmlMapper xmlMapper = new XmlMapper();

		// xmlMapper 설정, 불필요한거 스킵
		xmlMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

		detailDTO = xmlMapper.readValue(detailList, new TypeReference<List<ConcertDetailDTO>>() {
		});
		
		// 테스트 출력
		for(ConcertDetailDTO c : detailDTO) {
			System.out.println("공연명 : " + c.getPd_id());
			System.out.println("제목 : " + c.getPd_title());
			System.out.println("시작일 : " + c.getPd_start());
			System.out.println("종료일 : " + c.getPd_end());
			System.out.println("위치 : " + c.getPd_location());
			System.out.println("출연진 : " + c.getPd_cast());
			System.out.println("감독 및 연출 : " + c.getPd_crew());
			System.out.println("상영 시간 : " + c.getPd_runtime());
			System.out.println("좌석가격 : " + c.getPd_seatprice());
			System.out.println("장르 : " + c.getPd_genre());
			System.out.println("오픈런 : " + c.getPd_openturn());
			System.out.println("현장구매 : " + c.getPd_visit());
			System.out.println("어린아이 허용 : " + c.getPd_child());
			System.out.println("공연 시간 : " + c.getPd_runtime());
			System.out.println("-----------------------------------");
			System.out.println();
		}
		
//		List<String> test1 = detailDTO.getPoster();
//		for(String d : test1 ) {
//			System.out.println("포스터 : " + d);			
//		}
//			
//		System.out.println("상세정보 이미지 : " + detailDTO.getId());
		return detailDTO;
	}
}
