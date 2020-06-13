package main.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.bean.Category;
import main.bean.Coupon;
import main.facade.CompanyFacade;

@RestController
@RequestMapping("companies")
//@CrossOrigin(origins = "http://localhost:4200")
public class CompanyController {

	
	
	@Autowired
	Map<String,Session> sessionMap;
	


	@PostMapping("/addCoupon/{token}")
	public ResponseEntity<?> addCoupon(@PathVariable String token,@RequestBody Coupon coupon)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				CompanyFacade service = (CompanyFacade) session.getService();
				service.addCoupon(coupon);
			}
		
		return	ResponseEntity.ok("{}"); //{} is for not getting code 200 as an error
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@PutMapping("/updateCoupon/{token}")
	public ResponseEntity<?> updateCoupon(@PathVariable String token,@RequestBody Coupon coupon)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				CompanyFacade service = (CompanyFacade) session.getService();
				service.updateCoupon(coupon);
			}
			
			return ResponseEntity.ok("{}");
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@DeleteMapping("/deleteCoupon/{token}/{id}")
	public ResponseEntity<?> deleteCoupon(@PathVariable String token,@PathVariable int id)
	{
		
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				CompanyFacade service = (CompanyFacade) session.getService();
				service.deleteCoupon(id);
			}
			
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@GetMapping("/getCompanyCoupon/{token}")
	public ResponseEntity<List<Coupon>> getCompanyCoupon(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		return ResponseEntity.ok(service.getCompanyCoupons());

	}
	@GetMapping("/getComapnyCouponCategory/{token}/{category}")
	public ResponseEntity<List<Coupon>> getCouponByCategory(@PathVariable String token,@PathVariable Category category)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		return ResponseEntity.ok(service.getCompanyCoupons(category));
	
	}
	@GetMapping("/getComapnyCouponMaxPrice/{token}/{maxPrice}")
	public ResponseEntity<List<Coupon>> getCouponByMaxPrice(@PathVariable String token,@PathVariable double maxPrice)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		return ResponseEntity.ok(service.getCompanyCoupons(maxPrice));

	}
	@GetMapping("/getComapnyDetails/{token}")
	public ResponseEntity<?> getCompanyDetails(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		return ResponseEntity.ok(service.getCompanyDetails());
		
	}
}

