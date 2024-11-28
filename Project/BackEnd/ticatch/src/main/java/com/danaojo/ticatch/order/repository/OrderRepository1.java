package com.danaojo.ticatch.order.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danaojo.ticatch.order.Entity.Order;

public interface OrderRepository1 extends JpaRepository<Order, Long>{

	List<Order> findBySeqPfjoinId(Long seqPfjoinId);
	
}
