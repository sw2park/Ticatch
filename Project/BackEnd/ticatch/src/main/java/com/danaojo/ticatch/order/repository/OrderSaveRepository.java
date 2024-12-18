package com.danaojo.ticatch.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danaojo.ticatch.order.Entity.SaveEntity;

public interface OrderSaveRepository extends JpaRepository<SaveEntity, Integer>{

	 SaveEntity findByUserid(String userid);

}
