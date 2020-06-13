package main.facade;



import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import main.bean.Category;
import main.bean.Coupon;
import main.bean.Customer;
import main.exceptions.AlreadyHaveThisCoupon;
import main.exceptions.CouponNotExist;
import main.exceptions.LoginFailed;
import main.exceptions.NoMoreCoupons;

@Service
@Scope("prototype")  //for Angular
public class CustomerFacade extends ClientFacade {

	private Customer customer;
	
	@Override
	public boolean login(String email, String password) throws LoginFailed {
		customer = custRepo.findByEmailAndPassword(email, password);
		
		if(customer!=null)
			return true;
		
		throw new LoginFailed();
	}
	
	//created 2 methods one with coupon id and one with coupon- this one not used
//	public void PurchaseCoupon(Coupon coupon) throws CouponNotExist, NoMoreCoupons, AlreadyHaveThisCoupon
//	{
//		if(coupRepo.existsById(coupon.getId()))
//		{
//			for (Coupon coupon2 : customer.getCouponsList()) {
//				if(coupon.getId()==coupon2.getId())
//					throw new AlreadyHaveThisCoupon();
//			}
//				if(coupon.getAmount()>0)
//				{
//					customer.getCouponsList().add(coupon);
//					coupon.setAmount(coupon.getAmount()-1); 
//					coupRepo.save(coupon);
//					custRepo.save(customer);
//				}
//				else
//					throw new NoMoreCoupons();
//			
//			
//		}
//		else
//			throw new CouponNotExist();
//		
//	}
	public void PurchaseCoupon(int couponId) throws CouponNotExist, NoMoreCoupons, AlreadyHaveThisCoupon
	{
		if(coupRepo.existsById(couponId))
		{
			Coupon coupon = coupRepo.findById(couponId).get();
			for (Coupon coupon2 : customer.getCouponsList()) {
				if(couponId==coupon2.getId())
					throw new AlreadyHaveThisCoupon();
			}
				if(coupon.getAmount()>0)
				{
					customer.getCouponsList().add(coupon);
					coupon.setAmount(coupon.getAmount()-1); 
					coupRepo.save(coupon);
					customer=custRepo.save(customer);//update
				}
				else
					throw new NoMoreCoupons();
			
			
		}
		else
			throw new CouponNotExist();
		
	}
	public Set<Coupon>getCustomerCoupons()
	{
		return custRepo.findById(customer.getId()).get().getCouponsList();
		
	}
	public Set<Coupon>getCustomerCoupons(Category category)
	{
	 Set<Coupon> list =custRepo.findById(customer.getId()).get().getCouponsList();
	 Set<Coupon> list2 = new HashSet<Coupon>();
	 for (Coupon coupon : list)
	 	{
		if(coupon.getCategory()==category)
			list2.add(coupon);
	 	}
	 return list2;
	}
	
	public Set<Coupon>getCustomerCoupons(double maxPrice)
	{
		 Set<Coupon> list =custRepo.findById(customer.getId()).get().getCouponsList();
		 Set<Coupon> list2 =  new HashSet<Coupon>();
		 for (Coupon coupon : list)
		 	{
			if(coupon.getPrice()<=maxPrice)
				list2.add(coupon);
		 	}
		 return list2;
	}
	public List<Coupon>getAllCoupons() // for part 3
	{
		return coupRepo.findAll();
	}
	
	public Customer getDetails()
	{
		return custRepo.findById(customer.getId()).get(); // the most update one is from the data base
		
	}
	
	
	
	

}
