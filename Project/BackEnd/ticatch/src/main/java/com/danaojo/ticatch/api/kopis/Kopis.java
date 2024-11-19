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
		System.out.println(concertStr);
		XmlMapper xmlMapper = new XmlMapper();
		// xmlMapper 설정, 불필요한거 스킵
		xmlMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		List<ConcertListDTO> concertList = new ArrayList<>();

		concertList = xmlMapper.readValue(concertStr.toString(), new TypeReference<List<ConcertListDTO>>() {
		});

		// 테스트 출력
		for (ConcertListDTO cDto : concertList) {
			System.out.println("공연ID : " + cDto.getId());
			System.out.println("공연명 : " + cDto.getName());
			System.out.println("공연시작일 : " + cDto.getStartDate());
			System.out.println("공연종료일 : " + cDto.getEndDate());
			System.out.println("공연시설명 : " + cDto.getPlaceName());
			System.out.println("포스터이미지 : " + cDto.getPoster());
			System.out.println("공연지역 : " + cDto.getArea());
			System.out.println("공연장르 : " + cDto.getGenre());
			System.out.println("--------------------------------");
			System.out.println();
		}
		return concertList;
	}

	public void concertDetail() throws JsonMappingException, JsonProcessingException {
		String detailList = callConcertDetail("PF178134");
//		ConcertDetailDTO detailDTO = new ConcertDetailDTO();
		
		List<ConcertDetailDTO> detailDTO = new ArrayList<>();
		
		XmlMapper xmlMapper = new XmlMapper();

		// xmlMapper 설정, 불필요한거 스킵
		xmlMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

//		detailDTO = xmlMapper.readValue(detailList, ConcertDetailDTO.class);
		detailDTO = xmlMapper.readValue(detailList, new TypeReference<List<ConcertDetailDTO>>() {
		});
		
		// 테스트 출력
		for(ConcertDetailDTO c : detailDTO) {
			System.out.println("공연명 : " + c.getId());
			System.out.println("제목 : " + c.getTitle());
			System.out.println("시작일 : " + c.getStartDate());
			System.out.println("종료일 : " + c.getEndDate());
			System.out.println("위치 : " + c.getPlace());
			System.out.println("출연진 : " + c.getCast());
			System.out.println("감독 및 연출 : " + c.getDirector());
			System.out.println("상영 시간 : " + c.getRunTime());
			System.out.println("좌석가격 : " + c.getPrice());
			System.out.println("장르 : " + c.getGenre());
			System.out.println("오픈런 : " + c.getOpenRun());
			System.out.println("현장구매 : " + c.getBuyVisit());
			System.out.println("어린아이 허용 : " + c.getChild());
			System.out.println("공연 시간 : " + c.getPerformTime());			
		}
		
//		List<String> test1 = detailDTO.getPoster();
//		for(String d : test1 ) {
//			System.out.println("포스터 : " + d);			
//		}
//			
//		System.out.println("상세정보 이미지 : " + detailDTO.getId());
		
	}
}
