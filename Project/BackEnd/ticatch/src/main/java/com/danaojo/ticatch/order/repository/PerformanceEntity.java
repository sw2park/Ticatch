package com.danaojo.ticatch.order.repository;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name= "PERFORMANCE")
public class PerformanceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_order_id_gen")
    @SequenceGenerator(name = "seq_order_id_gen", sequenceName = "SEQ_order_id", allocationSize = 1)
    private Long seqOrderId; // PK
    
    private String performanceId;
    private int price;
    private int totalTicket;
    private int remainSeat;
    private int totalExhTicket;
    private int remainExhTicket;
    private String place;
    private LocalDate viewDate;
    private LocalDate viewTime;
    private LocalDate startDate;
    private LocalDate endDate;

    // 기본 생성자
    public PerformanceEntity() {}

	public PerformanceEntity(Long seqOrderId, String performanceId, int price, int totalTicket, int remainSeat,
			int totalExhTicket, int remainExhTicket, String place, LocalDate viewDate, LocalDate viewTime,
			LocalDate startDate, LocalDate endDate) {
		super();
		this.seqOrderId = seqOrderId;
		this.performanceId = performanceId;
		this.price = price;
		this.totalTicket = totalTicket;
		this.remainSeat = remainSeat;
		this.totalExhTicket = totalExhTicket;
		this.remainExhTicket = remainExhTicket;
		this.place = place;
		this.viewDate = viewDate;
		this.viewTime = viewTime;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Long getSeqOrderId() {
		return seqOrderId;
	}

	public void setSeqOrderId(Long seqOrderId) {
		this.seqOrderId = seqOrderId;
	}

	public String getPerformanceId() {
		return performanceId;
	}

	public void setPerformanceId(String performanceId) {
		this.performanceId = performanceId;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getTotalTicket() {
		return totalTicket;
	}

	public void setTotalTicket(int totalTicket) {
		this.totalTicket = totalTicket;
	}

	public int getRemainSeat() {
		return remainSeat;
	}

	public void setRemainSeat(int remainSeat) {
		this.remainSeat = remainSeat;
	}

	public int getTotalExhTicket() {
		return totalExhTicket;
	}

	public void setTotalExhTicket(int totalExhTicket) {
		this.totalExhTicket = totalExhTicket;
	}

	public int getRemainExhTicket() {
		return remainExhTicket;
	}

	public void setRemainExhTicket(int remainExhTicket) {
		this.remainExhTicket = remainExhTicket;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public LocalDate getViewDate() {
		return viewDate;
	}

	public void setViewDate(LocalDate viewDate) {
		this.viewDate = viewDate;
	}

	public LocalDate getViewTime() {
		return viewTime;
	}

	public void setViewTime(LocalDate viewTime) {
		this.viewTime = viewTime;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "PerformanceEntity [seqOrderId=" + seqOrderId + ", performanceId=" + performanceId + ", price=" + price
				+ ", totalTicket=" + totalTicket + ", remainSeat=" + remainSeat + ", totalExhTicket=" + totalExhTicket
				+ ", remainExhTicket=" + remainExhTicket + ", place=" + place + ", viewDate=" + viewDate + ", viewTime="
				+ viewTime + ", startDate=" + startDate + ", endDate=" + endDate + ", getSeqOrderId()="
				+ getSeqOrderId() + ", getPerformanceId()=" + getPerformanceId() + ", getPrice()=" + getPrice()
				+ ", getTotalTicket()=" + getTotalTicket() + ", getRemainSeat()=" + getRemainSeat()
				+ ", getTotalExhTicket()=" + getTotalExhTicket() + ", getRemainExhTicket()=" + getRemainExhTicket()
				+ ", getPlace()=" + getPlace() + ", getViewDate()=" + getViewDate() + ", getViewTime()=" + getViewTime()
				+ ", getStartDate()=" + getStartDate() + ", getEndDate()=" + getEndDate() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
    
    
}
