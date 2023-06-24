package com.spring.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter @Getter @ToString
@AllArgsConstructor @NoArgsConstructor
public class PasswordDTO {
	//changePwd.jsp와 일치시키기
	private String username;		//아이디
	private String currentPassword;	//현재비번
	private String newPassword;		//새비번
	private String confirmPassword;	//새비번확인
	
	public boolean passwordEquals() {	
		return newPassword.equals(confirmPassword);
	}
	
}
