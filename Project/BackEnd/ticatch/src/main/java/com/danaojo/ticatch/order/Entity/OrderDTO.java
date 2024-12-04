package com.danaojo.ticatch.order.Entity;

import java.util.List;

public class OrderDTO {

    private List<Integer> seqPfjoinIds;  // 공연 ID 배열
    private String selectedDate;        // 선택된 날짜
    private String totalPrice;          // 총 가격
    private String selectedTime;        // 선택된 시간
    private List<SeatInfo> selectedSeatsInfo; // 좌석 정보 배열

    // Getters and Setters
    public List<Integer> getSeqPfjoinIds() {
        return seqPfjoinIds;
    }

    public void setSeqPfjoinIds(List<Integer> seqPfjoinIds) {
        this.seqPfjoinIds = seqPfjoinIds;
    }

    public String getSelectedDate() {
        return selectedDate;
    }

    public void setSelectedDate(String selectedDate) {
        this.selectedDate = selectedDate;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getSelectedTime() {
        return selectedTime;
    }

    public void setSelectedTime(String selectedTime) {
        this.selectedTime = selectedTime;
    }

    public List<SeatInfo> getSelectedSeatsInfo() {
        return selectedSeatsInfo;
    }

    public void setSelectedSeatsInfo(List<SeatInfo> selectedSeatsInfo) {
        this.selectedSeatsInfo = selectedSeatsInfo;
    }

    // Nested SeatInfo class
    public static class SeatInfo {
        private String seat;  // 좌석 번호
        private String grade; // 좌석 등급
        private String price; // 좌석 가격

        public String getSeat() {
            return seat;
        }

        public void setSeat(String seat) {
            this.seat = seat;
        }

        public String getGrade() {
            return grade;
        }

        public void setGrade(String grade) {
            this.grade = grade;
        }

        public String getPrice() {
            return price;
        }

        public void setPrice(String price) {
            this.price = price;
        }
    }
}

