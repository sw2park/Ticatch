package com.danaojo.ticatch.api.kopis.dto;

import java.util.List;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ConcertDetailDTO { // 공연 상세 DTO
	@JacksonXmlProperty(localName = "mt20id")
	private String id;	// 공연/전시 아이디
	
	@JacksonXmlProperty(localName = "prfnm")
	private String title;	// 제목
	
	@JacksonXmlProperty(localName = "prfpdfrom")
	private String startDate;	// 시작일
	
	@JacksonXmlProperty(localName = "prfpdto")
	private String endDate;	// 종료일
	
	@JacksonXmlProperty(localName = "fcltynm")
	private String place;	// 위치
	
	@JacksonXmlProperty(localName = "prfcast")
	private String cast;	// 출연진
	
	@JacksonXmlProperty(localName = "prfcrew")
	private String director;	// 감독 및 연출 
	
	@JacksonXmlProperty(localName = "prfruntime")
	private String runTime;	// 상영 시간
	
	@JacksonXmlProperty(localName = "pcseguidance")
	private String price;	// 좌석가격
	
	@JacksonXmlProperty(localName = "poster")
	private String poster;	// 포스터
	
	@JacksonXmlProperty(localName = "genrenm")
	private String genre;	// 장르
	
	@JacksonXmlProperty(localName = "openrun")
	private String openRun;	// 오픈런
	
	@JacksonXmlProperty(localName = "visit")
	private String buyVisit;	// 현장구매
	
	@JacksonXmlProperty(localName = "child")
	private String child;	// 어린아이 허용
	
//	@JacksonXmlProperty(localName = "styurls")
//	private List<String> detailImg;	// 상세정보 이미지
	
	@JacksonXmlProperty(localName = "dtguidance")
	private String performTime;	// 공연 시간
}
