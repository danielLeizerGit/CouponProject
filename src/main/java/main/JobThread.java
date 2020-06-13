package main;


import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import main.bean.Company;
import main.bean.Coupon;
import main.bean.Customer;
import main.db.CompanyRepository;
import main.db.CouponRepository;
import main.db.CustomerRepository;
@Component
public class JobThread extends Thread {
	final long MilisecondsTwelveHours=43200000;
	boolean quit=false;
	
	@Autowired
	 CouponRepository couponRepo;
	@Autowired
	CustomerRepository custRepo;
	 @Autowired
	 CompanyRepository compRepo;
	 
 @Override
public void run()
 {
	 while(!quit)
	 {
		 Calendar cal = Calendar.getInstance();
		cal.set(Calendar.MILLISECOND, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.HOUR, 0);
		//Date date = new Date(cal.getTimeInMillis()-MilisecondsTwelveHours);
		Date date = new Date(cal.getTimeInMillis());
		
		 List<Coupon> couponList =couponRepo.findByEndDateBefore(date); // need only after
		 for (Coupon coupon : couponList) {
			 for (Customer customer : custRepo.findAll()) {
				for (Coupon coupon2 : customer.getCouponsList()) {
					if(coupon2.getId()==coupon.getId())
					{
						customer.getCouponsList().remove(coupon);
						break;
					}
				}
				custRepo.save(customer);
			}
			Company com= compRepo.findById(coupon.getCompanyId().getId()).get();
			com.getCouponsList().remove(coupon);
			compRepo.save(com);
			couponRepo.delete(coupon);
		}
		
		 try {
			sleep(1000*60*60*24);
		} catch (InterruptedException e) {
			
		}
	 }
	
}
 
 public void StopRun()
 {
	 quit = true;
 }
}
