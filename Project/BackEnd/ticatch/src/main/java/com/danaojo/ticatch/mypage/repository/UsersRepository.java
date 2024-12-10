package com.danaojo.ticatch.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.danaojo.ticatch.mypage.entity.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
	@Query("SELECT seq_user_id FROM Users u WHERE u.user_name = :user_name")
	Long findByUser_Name(String user_name);
	
}
