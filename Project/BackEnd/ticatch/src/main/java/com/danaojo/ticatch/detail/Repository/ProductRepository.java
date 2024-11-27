package com.danaojo.ticatch.detail.Repository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.danaojo.ticatch.api.repository.PFJoin;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ProductRepository {
	
	@Autowired
	private final EntityManager em;
	
	public PFJoin findOne(Long seq_pfjoin_id) {
		return em.find(PFJoin.class, seq_pfjoin_id);
	}
	
	// pd_id로 상품 상세정보 조회
	public List<PFJoin> detaList(Long seq_pfjoin_id) {
	    return em.createQuery(
	        "SELECT p FROM PFJoin p WHERE p.seq_pfjoin_id = :seq_pfjoin_id", 
	        PFJoin.class)
	        .setParameter("seq_pfjoin_id", seq_pfjoin_id)
	        .getResultList();
	}



}
