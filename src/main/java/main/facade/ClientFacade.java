package main.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.db.CompanyRepository;
import main.db.CouponRepository;
import main.db.CustomerRepository;
import main.exceptions.LoginFailed;

@Service
public abstract class ClientFacade {

	@Autowired
	CompanyRepository compRepo;
	@Autowired
	CustomerRepository custRepo;
	@Autowired
	CouponRepository coupRepo;
	
	
	public abstract boolean login(String email,String password) throws LoginFailed;
}
