package main.web;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.bean.Category;
import main.bean.Coupon;
import main.facade.CompanyFacade;
import main.facade.CustomerFacade;

@RestController
@RequestMapping("customers")
//@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	
	@Autowired
	Map<String,Session> sessionMap;
	

	@PostMapping("/PurchaseCoupon/{token}/{id}")
	public ResponseEntity<?> PurchaseCoupon(@PathVariable String token,@PathVariable int id)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				CustomerFacade service = (CustomerFacade) session.getService();
				service.PurchaseCoupon(id);
			}
			
		return	ResponseEntity.ok("{}");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@GetMapping("/getCustomerCoupons/{token}")
	public ResponseEntity<Set<Coupon>> getCustomerCoupons(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		return  ResponseEntity.ok(service.getCustomerCoupons());
		
	}
	@GetMapping("/getCustomerCouponsCategory/{token}/{category}")
	public ResponseEntity<Set<Coupon>> getCustomerCouponsByCategory(@PathVariable String token,@PathVariable Category category)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		return  ResponseEntity.ok(service.getCustomerCoupons(category));
		
	}
	@GetMapping("/getCustomerCouponsMaxPrice/{token}/{maxPrice}")
	public ResponseEntity<Set<Coupon>> getCustomerCouponsByMaxPrice(@PathVariable String token,@PathVariable double maxPrice)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		return ResponseEntity.ok(service.getCustomerCoupons(maxPrice));

	}
	@GetMapping("/getAllCoupons/{token}")
	public ResponseEntity<List<Coupon>> getAllCoupons(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		return ResponseEntity.ok(service.getAllCoupons());
	}
	
	@GetMapping("/getCustomerDetails/{token}")
	public ResponseEntity<?> getCustomerDetails(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		return ResponseEntity.ok(service.getDetails());

	}
	
	
}
