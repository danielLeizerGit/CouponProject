package main.facade;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import main.bean.Category;
import main.bean.Company;
import main.bean.Coupon;
import main.bean.Customer;
import main.exceptions.CouponAlreadyExist;
import main.exceptions.CouponNotExist;
import main.exceptions.CouponNotValid;
import main.exceptions.LoginFailed;
import main.exceptions.TitleIsAlreadyTaken;

@Service
@Scope("prototype") //for Angular
public class CompanyFacade extends ClientFacade {

	private Company company;
	final long MilisecondsTwelveHours=43200000;
	
	@Override
	public boolean login(String email, String password) throws LoginFailed {
		company=compRepo.findByEmailAndPassword(email, password);
		if(company!=null)
			return true;
		throw new LoginFailed();
	}
	
	public void addCoupon(Coupon coupon) throws CouponAlreadyExist, CouponNotValid
	{
		if(coupon.getTitle().equals(""))
			throw new CouponNotValid();
		if(!coupRepo.existsByCompanyIdAndTitle(company, coupon.getTitle()))
		{
			if(checkCouponValidation(coupon))
			{
				coupon.setCompanyId(company);
				coupRepo.save(coupon);
			}
			else
				throw new CouponNotValid();
		}
				
		else
			throw new CouponAlreadyExist();
	}
	
	public void updateCoupon(Coupon coupon) throws CouponNotExist, CouponNotValid, TitleIsAlreadyTaken
	{
		if(coupon.getTitle().equals(""))
			throw new CouponNotValid();
		if(coupRepo.existsById(coupon.getId()))
		{
			if(checkCouponValidation(coupon))
			{
				for (Coupon coupon2 : company.getCouponsList()) {
					if(coupon.getId()!=coupon2.getId() && coupon.getTitle().equals(coupon2.getTitle()))
						throw new TitleIsAlreadyTaken();
				}
				coupRepo.save(coupon);
			}
				
		}
		else	
		throw new CouponNotExist();
	}
	
	public void deleteCoupon(int couponId) throws CouponNotExist
	{
		
		if(coupRepo.existsByCompanyIdAndId(company, couponId))
		{
			Coupon coupon = coupRepo.findById(couponId).get();
			
			for (Customer customer : custRepo.findAll()) {
				customer.getCouponsList().remove(coupon);
				custRepo.save(customer);
			}
		
			company.getCouponsList().remove(coupon);
			
			company=compRepo.save(company); //changed
			
			coupRepo.deleteById(couponId);
		}
			
		else
		throw new CouponNotExist();
	}
	
	public List<Coupon>getCompanyCoupons()
	{
		return coupRepo.findByCompanyId(company);
	}
	
	public List<Coupon>getCompanyCoupons(Category category)
	{
		return coupRepo.findByCompanyIdAndCategory(company, category);
	}
	public List<Coupon>getCompanyCoupons(double maxPrice)
	{
		return coupRepo.findByCompanyIdAndPriceLessThanEqual(company, maxPrice);
	}
	public Company getCompanyDetails()
	{
		return compRepo.findById(company.getId()).get(); // the most update one is from the data base
	}
	
	private boolean checkCouponValidation(Coupon coupon) throws CouponNotValid  
	{ // check if amount is bigger than 0 if price is not negative 
		//and end date is in the future and is bigger than start date
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.HOUR, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		///cal.getTimeInMillis bring me not the time of 0:00:00 but 12:00:00 so i took 12 hours from it
		Date date = new Date(cal.getTimeInMillis()-MilisecondsTwelveHours);
		
		
		if(coupon.getAmount()>0 && coupon.getPrice()>=0 && date.getTime()<=(coupon.getEndDate().getTime())
				&& coupon.getStartDate().getTime()<=coupon.getEndDate().getTime())
		{
			return true;
		}
				throw new CouponNotValid();
	}
	
	
	
}
