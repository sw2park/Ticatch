package com.danaojo.ticatch.order.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danaojo.ticatch.order.Entity.OrderEntity;
import com.danaojo.ticatch.order.Entity.TestPFJoinDTO;

public interface OrderRepository extends JpaRepository<TestPFJoinDTO, Long>{

	List<TestPFJoinDTO> findBySeqPfjoinId(Long seqPfjoinId);

	OrderEntity save(OrderEntity order);

}