package Sample;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Login_servlet extends HttpServlet
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void service(HttpServletRequest req,HttpServletResponse res) throws IOException
	{
		
		res.setHeader("Access-Control-Allow-Origin","*");
	
		
		String uname = req.getParameter("username");
		String pass = req.getParameter("pass");
	   
		Login_handler.sendlogin(uname, pass);
	    
	    if(Login_ES.login()) {
	    	res.setStatus(200);
	    }
	    else{
	    	res.setStatus(404);
	    }
		
	}
}
