package main.facade;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import main.bean.Company;
import main.bean.Coupon;
import main.bean.Customer;

import main.db.CustomerRepository;
import main.exceptions.CompanyAlreadyExist;
import main.exceptions.CompanyNotExist;
import main.exceptions.CustomerAlreadyExist;
import main.exceptions.CustomerNotExist;
import main.exceptions.CustomerNotValid;
import main.exceptions.EmaiIsTaken;
import main.exceptions.LoginFailed;

@SuppressWarnings("unused")
@Service
public class AdminFacade extends ClientFacade {

	@Override
	public boolean login(String email, String password) throws LoginFailed {
		if(email.equals("admin@admin.com") && password.equals("admin"))
			return true;
		 throw new LoginFailed();
	}
	
	public void addCompany(Company company) throws CompanyAlreadyExist
	{
		if(!compRepo.existsByNameOrEmail(company.getName(), company.getEmail()))
		compRepo.save(company);
		else
			throw new CompanyAlreadyExist();
	}
	public void updateCompany(Company company) throws CompanyNotExist, EmaiIsTaken
	{
		if(compRepo.existsById(company.getId()))
		{
			for (Company company2 : getAllCompanies()) {
				if(company.getId()!=company2.getId() && company.getEmail().equals(company2.getEmail()))
					throw new EmaiIsTaken();
				
					
			}
			compRepo.save(company);
		}		
			else
				throw new CompanyNotExist();
	}
	public void deleteCompany(int companyId) throws CompanyNotExist 
	{
		if(compRepo.existsById(companyId))
		{
			List<Coupon> coupons = getOneCompany(companyId).getCouponsList();
			
			for (Customer customer : getAllCustomers()) { //need to delete all the connections of customer and coupons
				for (Coupon coupon : coupons) {
					for (Coupon coupon2 : customer.getCouponsList()) {
						if(coupon.getId()==coupon2.getId())
						{
							customer.getCouponsList().remove(coupon2);
							customer=custRepo.save(customer);//update
							break; // move to the next coupon until all coupons are checked for each customer
						}
							
					}
				}
			}
			
			
			Company com=getOneCompany(companyId);
		//	com.getCouponsList().clear();
			com=compRepo.save(com);//update
			for (Coupon coupon : coupons) {
				
				coupRepo.deleteById(coupon.getId());
			}
		
			compRepo.deleteById(companyId);
			
		}
			
		else
			throw new CompanyNotExist();
	}
	
	public List<Company> getAllCompanies()
	{
		return compRepo.findAll();
	}
	
	public Company getOneCompany(int companyId)  throws CompanyNotExist// need to check if not exist
	{
		return compRepo.findById(companyId).orElseThrow(CompanyNotExist::new);
	}
	
	public void addCustomer(Customer customer) throws CustomerAlreadyExist //need to change the checking
	{
		if(!custRepo.existsByEmail(customer.getEmail()))
		custRepo.save(customer);
		else
			throw new CustomerAlreadyExist();
	}
	
	public void updateCustomer(Customer customer) throws CustomerNotExist,CustomerNotValid //cannot change id or email
, EmaiIsTaken
	{
		if(custRepo.existsById(customer.getId()))
		{
			if(customer.getEmail().equals("") || customer.getFirstName().equals("")|| customer.getLastName().equals(""))
				throw new CustomerNotValid();
			
			for (Customer customer2 : getAllCustomers()) {
				if(customer.getId()!=customer2.getId() && customer.getEmail().equals(customer2.getEmail()))
					throw new EmaiIsTaken();
			}
			custRepo.save(customer);
		}
			
			else
				throw new CustomerNotExist();
	}
	public void deleteCustomer(int customerId) throws CustomerNotExist
	{
		if(custRepo.existsById(customerId))
		{
			Set<Coupon> coupons=custRepo.findById(customerId).get().getCouponsList();
			
			for (Coupon coupon : coupons) {
				coupon.setAmount(coupon.getAmount()+1);
				coupRepo.save(coupon);
			}
			custRepo.findById(customerId).get().getCouponsList().clear();
			custRepo.save(getOneCustomer(customerId));
			custRepo.deleteById(customerId);
			

		}
		
		else
			throw new CustomerNotExist();
	}
	
	public List<Customer> getAllCustomers()
	{
		return custRepo.findAll();
	}
	
	public Customer getOneCustomer(int customerId) throws CustomerNotExist
	{
		return custRepo.findById(customerId).orElseThrow(CustomerNotExist::new); //need to check it
	}
	
	
	
	

}
