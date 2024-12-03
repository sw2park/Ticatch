package com.danaojo.ticatch.detail.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.danaojo.ticatch.detail.domain.Seat;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SeatRepository {
	
	@Autowired
	private final EntityManager em;

	public Seat seatView(Long seqPfjoinId, String selectDate, String selectTime) {
		return em.createQuery(
				"SELECT s FROM SEAT s WHERE s.seqPfjoinId = :seqPfjoinId AND s.selectDate = :selectDate AND s.selectTime = :selectTime", Seat.class)
				.setParameter("seqPfjoinId", seqPfjoinId)
	            .setParameter("selectDate", selectDate)
	            .setParameter("selectTime", selectTime)
	            .getSingleResult();
	}

}
