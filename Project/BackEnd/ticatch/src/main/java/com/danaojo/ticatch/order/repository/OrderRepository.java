package com.danaojo.ticatch.order.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danaojo.ticatch.order.Entity.OrderEntity;
import com.danaojo.ticatch.order.Entity.PFJoinDTO;
import com.danaojo.ticatch.order.Entity.SeatEntity;

public interface OrderRepository extends JpaRepository<PFJoinDTO, Long>{

	List<PFJoinDTO> findBySeqPfjoinId(Long seqPfjoinId);

	OrderEntity save(OrderEntity order);


}
