package Signup;

import java.io.IOException;

public class Signup_handler {
    
	static{
		Signup_ES.connection();
	}
	public static void sendsignup(String username,String email,String password) throws IOException{
		Signup_pojo pojo = new Signup_pojo();
		pojo.setUsername(username);
		pojo.setEmail(email);
		pojo.setPassword(password);
		Signup_ES.createnewuser(pojo);
	}

	
		
	
	
}
