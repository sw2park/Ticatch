DB 문서 및 PPT 작업물 보관 폴더

-- Member 테이블 생성
CREATE TABLE Member (
    SEQ_USER_ID NUMBER PRIMARY KEY,
    user_id VARCHAR2(50) UNIQUE,
    password VARCHAR2(100),
    login_type VARCHAR2(20),
    create_date DATE DEFAULT SYSDATE,
    update_date DATE
);

-- Event (전시) 테이블 생성
CREATE TABLE Event (
    SEQ_EVENT_ID NUMBER PRIMARY KEY,
    event_id VARCHAR2(50) UNIQUE,
    title VARCHAR2(100),
    description VARCHAR2(500),
    event_type VARCHAR2(50),
    start_time DATE,
    location VARCHAR2(200),
    img_url VARCHAR2(200)
);

-- Ticket (티켓) 테이블 생성
CREATE TABLE Ticket (
    TICKET_ID NUMBER PRIMARY KEY,
    event_id NUMBER,
    seat_type VARCHAR2(30),
    price NUMBER,
    remain_ticket NUMBER,
    create_date DATE DEFAULT SYSDATE,
    update_date DATE,
    CONSTRAINT fk_ticket_event FOREIGN KEY (event_id) REFERENCES Event(SEQ_EVENT_ID)
);

-- Calendar 테이블 생성
CREATE TABLE Calendar (
    SEQ_CALENDAR_ID NUMBER PRIMARY KEY,
    event_id VARCHAR2(50),
    start_date DATE,
    end_date DATE,
    CONSTRAINT fk_calendar_event FOREIGN KEY (event_id) REFERENCES Event(event_id)
);

-- Reservation (예매) 테이블 생성
CREATE TABLE Reservation (
    SEQ_RESERVE_ID NUMBER PRIMARY KEY,
    user_id NUMBER,
    ticket_id NUMBER,
    reserve_date DATE DEFAULT SYSDATE,
    create_date DATE DEFAULT SYSDATE,
    update_date DATE,
    CONSTRAINT fk_reservation_user FOREIGN KEY (user_id) REFERENCES Member(SEQ_USER_ID),
    CONSTRAINT fk_reservation_ticket FOREIGN KEY (ticket_id) REFERENCES Ticket(TICKET_ID)
);

SELECT * FROM "MEMBER" m ;
SELECT * FROM EVENT e ;
SELECT * FROM RESERVATION r ;
SELECT * FROM TICKET t ;
SELECT * FROM CALENDAR c ;

