package com.danaojo.ticatch.api.kopis.dto;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ConcertListDTO {	// 공연 목록 DTO
	@JacksonXmlProperty(localName = "mt20id")
	private String id;	// 공연ID
	
	@JacksonXmlProperty(localName = "prfnm")
	private String name;	// 공연명
	
	@JacksonXmlProperty(localName = "prfpdfrom")
	private String startDate;	// 공연시작일
	
	@JacksonXmlProperty(localName = "prfpdto")
	private String endDate;	// 공연종료일
	
	@JacksonXmlProperty(localName = "fcltynm")
	private String placeName;	// 공연시설명(공연장명)
	
	@JacksonXmlProperty(localName = "poster")
	private String poster;	// 포스터이미지경로
	
	@JacksonXmlProperty(localName = "area")
	private String area;	// 공연지역
	
	@JacksonXmlProperty(localName = "genrenm")
	private String genre;	// 공연 장르명
	
	
	@JacksonXmlProperty(localName = "openrun")
	private String openrun;	// 공연 장르명
}
