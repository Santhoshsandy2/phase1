package Signup;

import java.io.IOException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Signup_servlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	public void service(HttpServletRequest req,HttpServletResponse res) throws IOException{
				
		res.setHeader("Access-Control-Allow-Origin","*");	
		
		String username = req.getParameter("username");
		String email=req.getParameter("email");
		String password = req.getParameter("password");
		Signup_handler.sendsignup(username, email, password);	
	}
	
}
