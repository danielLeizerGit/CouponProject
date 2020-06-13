package main.web;

import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.ClientType;
import main.LoginManager;
import main.facade.AdminFacade;
import main.facade.ClientFacade;
import main.facade.CompanyFacade;
import main.facade.CustomerFacade;

@RestController
@RequestMapping("loginCon")
//@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

	AdminFacade adminF;
	CustomerFacade cusF;
	CompanyFacade comF;
	
	@Autowired
	private LoginManager loginManager;
	@Autowired
	private Map<String,Session> sessionMap;

	
	@PostMapping("/login/{email}/{password}/{clientType}")
	public String login(@PathVariable String email,@PathVariable String password,@PathVariable ClientType clientType)
	{
		String token = UUID.randomUUID().toString();
		
		try {
			ClientFacade service = loginManager.Login(email, password, clientType);
			if(service!=null)
			{
				Session	session = new Session(service,System.currentTimeMillis());
				sessionMap.put(token, session);
				return token;
			}
			return "Error: login failed";
			
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	

	
	@PostMapping("/logout/{token}")
	public void logout(@PathVariable String token)
	{
		sessionMap.remove(token);
	}
}
