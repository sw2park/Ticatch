package com.danaojo.ticatch.order.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class OrderEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "orders_seq_gen")
    @SequenceGenerator(name = "orders_seq_gen", sequenceName = "orders_seq", allocationSize = 1)
    private Long seqOrderId;

	private String userId; // 사용자 ID
	private String cancelStatus; // 취소 상태
	private String cancelDate; // 취소일
	private String buyDate; // 결제일
	private String totalSum; // 결제 총합
	private String totalTicket; // 구매한 티켓 개수
	private String seqPfjoinId; // 공연 시퀀스 아이디
	private String viewDate; // 관람일
	private String viewTime; // 관람 회차
	private String seatNum; // 좌석 번호
	private String place; // 관람 장소 이름

	public OrderEntity(Long seqOrderId, String userId, String cancelStatus, String cancelDate, String buyDate,
			String totalSum, String totalTicket, String seqPfjoinId, String viewDate, String viewTime, String seatNum,
			String place) {
		super();
		this.seqOrderId = seqOrderId;
		this.userId = userId;
		this.cancelStatus = cancelStatus;
		this.cancelDate = cancelDate;
		this.buyDate = buyDate;
		this.totalSum = totalSum;
		this.totalTicket = totalTicket;
		this.seqPfjoinId = seqPfjoinId;
		this.viewDate = viewDate;
		this.viewTime = viewTime;
		this.seatNum = seatNum;
		this.place = place;
	}

	public OrderEntity() {
	}

	public Long getSeqOrderId() {
		return seqOrderId;
	}

	public void setSeqOrderId(Long seqOrderId) {
		this.seqOrderId = seqOrderId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCancelStatus() {
		return cancelStatus;
	}

	public void setCancelStatus(String cancelStatus) {
		this.cancelStatus = cancelStatus;
	}

	public String getCancelDate() {
		return cancelDate;
	}

	public void setCancelDate(String cancelDate) {
		this.cancelDate = cancelDate;
	}

	public String getBuyDate() {
		return buyDate;
	}

	public void setBuyDate(String buyDate) {
		this.buyDate = buyDate;
	}

	public String getTotalSum() {
		return totalSum;
	}

	public void setTotalSum(String totalSum) {
		this.totalSum = totalSum;
	}

	public String getTotalTicket() {
		return totalTicket;
	}

	public void setTotalTicket(String totalTicket) {
		this.totalTicket = totalTicket;
	}

	public String getSeqPfjoinId() {
		return seqPfjoinId;
	}

	public void setSeqPfjoinId(String seqPfjoinId) {
		this.seqPfjoinId = seqPfjoinId;
	}

	public String getViewDate() {
		return viewDate;
	}

	public void setViewDate(String viewDate) {
		this.viewDate = viewDate;
	}

	public String getViewTime() {
		return viewTime;
	}

	public void setViewTime(String viewTime) {
		this.viewTime = viewTime;
	}

	public String getSeatNum() {
		return seatNum;
	}

	public void setSeatNum(String seatNum) {
		this.seatNum = seatNum;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	@Override
	public String toString() {
		return "OrderDTO [seqOrderId=" + seqOrderId + ", userId=" + userId + ", cancelStatus=" + cancelStatus
				+ ", cancelDate=" + cancelDate + ", buyDate=" + buyDate + ", totalSum=" + totalSum + ", totalTicket="
				+ totalTicket + ", seqPfjoinId=" + seqPfjoinId + ", viewDate=" + viewDate + ", viewTime=" + viewTime
				+ ", seatNum=" + seatNum + ", place=" + place + ", getSeqOrderId()=" + getSeqOrderId()
				+ ", getUserId()=" + getUserId() + ", getCancelStatus()=" + getCancelStatus() + ", getCancelDate()="
				+ getCancelDate() + ", getBuyDate()=" + getBuyDate() + ", getTotalSum()=" + getTotalSum()
				+ ", getTotalTicket()=" + getTotalTicket() + ", getSeqPfjoinId()=" + getSeqPfjoinId()
				+ ", getViewDate()=" + getViewDate() + ", getViewTime()=" + getViewTime() + ", getSeatNum()="
				+ getSeatNum() + ", getPlace()=" + getPlace() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}

}
