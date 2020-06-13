package main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import main.exceptions.LoginFailed;
import main.facade.AdminFacade;
import main.facade.ClientFacade;
import main.facade.CompanyFacade;
import main.facade.CustomerFacade;

@Component
public class LoginManager {
	
	@Autowired
	ConfigurableApplicationContext	ctx;
	
	
	public ClientFacade Login(String email,String password,ClientType clientType) throws LoginFailed
	{
		switch(clientType)
		{
		case Administrator:
			AdminFacade adminfacace=ctx.getBean(AdminFacade.class);
			if(adminfacace.login(email, password))
				return adminfacace;
			break;
		case Company: 
			CompanyFacade companyFacade=ctx.getBean(CompanyFacade.class);
			if(companyFacade.login(email, password))
				return companyFacade;
			break;
		case Customer:
			CustomerFacade customerFacade=ctx.getBean(CustomerFacade.class);
			if(customerFacade.login(email, password))
				return customerFacade;
			break;
		}
		
		return null;
	}

}
