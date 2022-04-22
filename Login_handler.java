package Sample;

import java.io.IOException;

public class Login_handler {

	static
	{
		Login_ES.connection();
	}
	
	public static void sendlogin(String username,String password) throws IOException
	{
	   Login_pojo poj = new Login_pojo();
	   poj.setUsername(username);
	   poj.setPassword(password);
	  
	}
}
