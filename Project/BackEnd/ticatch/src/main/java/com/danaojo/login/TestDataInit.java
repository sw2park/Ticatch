//package com.danaojo.login;
//
//import org.springframework.stereotype.Component;
//
//import com.danaojo.login.web.member.dto.Member;
//import com.danaojo.login.web.member.repository.MemberRepository;
//
//import jakarta.annotation.PostConstruct;
//import lombok.RequiredArgsConstructor;
//
//@Component
//@RequiredArgsConstructor
//public class TestDataInit {
//	
//	private final MemberRepository memberRepository;
//	
//	// 테스트용 데이터
//	@PostConstruct
//	public void init() {
//		Member member = new Member();
//		member.setLoginId("test");
//		member.setUserName("테스터");
//		member.setPassword("test!");
//		member.setPhone("01012345678");
//		memberRepository.save(member);
//	}
//}
