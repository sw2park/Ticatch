package com.danaojo.ticatch.detail.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.detail.Repository.SeatRepository;
import com.danaojo.ticatch.detail.domain.Seat;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SeatService {
	
	@Autowired
	private final SeatRepository seatRepository;
	
	public int seatView(Long seqPfjoinId, String selectDate, String selectTime) {
		return seatRepository.seatView(seqPfjoinId, selectDate, selectTime);
	}

}
