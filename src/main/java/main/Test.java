package main;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import main.bean.Category;
import main.bean.Company;
import main.bean.Coupon;
import main.bean.Customer;
import main.exceptions.CompanyAlreadyExist;
import main.exceptions.CompanyNotExist;
import main.exceptions.CouponAlreadyExist;
import main.exceptions.CouponNotExist;
import main.exceptions.CouponNotValid;
import main.exceptions.CustomerAlreadyExist;
import main.exceptions.CustomerNotExist;
import main.exceptions.LoginFailed;
import main.exceptions.NoMoreCoupons;
import main.exceptions.TitleIsAlreadyTaken;
import main.facade.AdminFacade;
import main.facade.CompanyFacade;
import main.facade.CustomerFacade;

@Component
public class Test {
@Autowired
ConfigurableApplicationContext	ctx;

@Autowired
LoginManager loginManager;



public void TestAll()
{
	//To run the test select each time a different one. the delete methods are off so it wont create and
	                                                                                //delete immediately
	
//	AdminTest();
//	CompanyTest();
//	CustomerTest();
	
}

	public void AdminTest()
	{
		//login admin
		AdminFacade adminFacade;
		try {
			adminFacade = (AdminFacade) loginManager.Login("admin@admin.com", "admin", ClientType.Administrator);
			
				//add company
				Company company = new Company("com1","com1@gmail.com","compass");
				adminFacade.addCompany(company);
				//update company
				company =adminFacade.getOneCompany(1);
				company.setEmail("com2@gmail.com");
				adminFacade.updateCompany(company);
				
				//get all companies
				List<Company>companies = adminFacade.getAllCompanies();
				for (Company company2 : companies) {
					System.out.println(company2);
				}
				//get one Company
				System.out.println("this company: " + adminFacade.getOneCompany(1));
				
				//delete company
				//adminFacade.deleteCompany(1); //make sure there is an id 1
				
				//add customer
				Customer customer =new Customer("dan","lei","cus4@gmail.com","cuspass");
				adminFacade.addCustomer(customer);
				//update customer
				customer.setEmail("cus5@gmail.com");
				adminFacade.updateCustomer(customer);
				//get all customers
				List<Customer>customers= adminFacade.getAllCustomers();
				for (Customer customer2 : customers) {
					System.out.println(customer2);
				}
				//get one customer
				System.out.println(adminFacade.getOneCustomer(1));
				//delete customer
				//adminFacade.deleteCustomer(1); //make sure there is an id 1
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		
	}
	public void CompanyTest()
	{
		//login company
		CompanyFacade companyFacade;
		try {
			companyFacade = (CompanyFacade)loginManager.Login("com2@gmail.com","compass",ClientType.Company);
			
				Calendar cal = Calendar.getInstance();
				Date startD = new Date(cal.getTimeInMillis());
				Date endD = new Date(cal.getTimeInMillis()*2);
				
				//add coupon
				Coupon coupon = new Coupon(Category.Spa,"title3","des",startD,endD,
					10,100,"image");
		          companyFacade.addCoupon(coupon);
				
				//update coupon
				List<Coupon>list = companyFacade.getCompanyCoupons();
				list.get(0).setPrice(50);
				companyFacade.updateCoupon(list.get(0));
				
				//delete coupon
				//companyFacade.deleteCoupon(1); //make sure there is an id 1
				
				//get all coupons
				List<Coupon> coupons = companyFacade.getCompanyCoupons();
				System.out.println("all coupons of company");
				for (Coupon coupon2 : coupons) {
					System.out.println(coupon2);
				}
				//get coupon by category
				System.out.println("all coupons of company by category");
				for (Coupon coupon2 : companyFacade.getCompanyCoupons(Category.Sport)) {
					System.out.println(coupon2);
				}
				//get coupons by max price
				System.out.println("all coupons of company by price");
				for (Coupon coupon2 : companyFacade.getCompanyCoupons(50)) {
					System.out.println(coupon2);
				}
				//get details of company
				System.out.println("detial: " +companyFacade.getCompanyDetails());
				
				
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		
	}
	public void CustomerTest()
	{
		//login
		CustomerFacade customerFacade;
		try {
			customerFacade = (CustomerFacade)loginManager.Login("cus5@gmail.com","cuspass",ClientType.Customer);
			
			//purchase coupons
				customerFacade.PurchaseCoupon(2);
			
				
			//get customer coupons
				Set<Coupon> coupons = customerFacade.getCustomerCoupons();
				System.out.println("all coupons of customer");
				for (Coupon coupon2 : coupons) {
					System.out.println("Coupon: " + coupon2);
				}
			//get customer coupons by category
				coupons = customerFacade.getCustomerCoupons(Category.Food);
				System.out.println("all coupons of customer by categories");
				for (Coupon coupon2 : coupons) {
					System.out.println("Coupon: " + coupon2);
				}
			//get customer coupons by max price
				coupons = customerFacade.getCustomerCoupons(100);
				System.out.println("all coupons of customer by price");
				for (Coupon coupon2 : coupons) {
					System.out.println("Coupon: " + coupon2);
				}
				//get all coupons for phase 3
				System.out.println("all coupons");
				for (Coupon coupon2 : customerFacade.getAllCoupons()) {
					System.out.println("Coupon: " + coupon2);
				}
			//get customer details
				System.out.println(customerFacade.getDetails());
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		
	}
}
