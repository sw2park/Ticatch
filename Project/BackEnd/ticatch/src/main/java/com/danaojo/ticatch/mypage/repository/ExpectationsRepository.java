package com.danaojo.ticatch.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danaojo.ticatch.mypage.entity.Expectations;

public interface ExpectationsRepository extends JpaRepository<Expectations, Long>{
	
}
