package com.danaojo.ticatch.mypage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.danaojo.ticatch.mypage.dto.OrderConfirmDTO;
import com.danaojo.ticatch.mypage.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
	@Query(value = "SELECT COUNT(*) FROM mypage_order mo WHERE seq_user_id = :seq_user_id", nativeQuery = true)
	int findByOrderCount(Long seq_user_id);

	@Query(value = "SELECT * FROM mypage_order m WHERE seq_user_id = :userSeq", nativeQuery = true)
	List<Orders> getOrderDto(@Param("userSeq") Long userSeq);
}
