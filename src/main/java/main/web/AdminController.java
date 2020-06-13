package main.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
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

import main.bean.Company;
import main.bean.Customer;
import main.facade.AdminFacade;

@RestController
@RequestMapping("admin")
//@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	
	@Autowired
	Map<String,Session> sessionMap;
	
	//not used any more
//	public AdminController(AdminFacade adminFacade)
//	{
//		this.adminface=adminFacade;
//	}

	
	@PostMapping("/addCompany/{token}")
	public ResponseEntity<?> addCompany(@PathVariable String token,@RequestBody Company company)
	{
		try {

			Session session = sessionMap.get(token);
			
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				AdminFacade service = (AdminFacade) session.getService();
				service.addCompany(company);
			
			}
			return ResponseEntity.ok(company);
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@PutMapping("/updateCompany/{token}")
	public ResponseEntity<?> updateCompany(@PathVariable String token,@RequestBody Company company)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				AdminFacade service = (AdminFacade) session.getService();
				service.updateCompany(company);
			}
			
			
			return ResponseEntity.ok(company);
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@DeleteMapping("deleteCompany/{token}/{id}")
	public ResponseEntity<?> deleteCompany(@PathVariable String token,@PathVariable int id)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				AdminFacade service = (AdminFacade) session.getService();
				service.deleteCompany(id);
			}
			
			
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("cant delete");
		}
	}
	
	@GetMapping("/getAllCompanies/{token}")
	public ResponseEntity<List<Company>> getAllCompanies(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		AdminFacade service = (AdminFacade) session.getService();
		return ResponseEntity.ok(service.getAllCompanies());
		
	}
	@GetMapping("/getOneCompany/{token}/{id}")
	public ResponseEntity<?> getOneCompany(@PathVariable String token,@PathVariable int id)
	{
		try {
			
			Session session = sessionMap.get(token);
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			return ResponseEntity.ok(service.getOneCompany(id)); 
			
		
		
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("cant find");
		}
	}
	
	//customer 
	@PostMapping("/addCustomer/{token}")
	public ResponseEntity<?> addCustomer(@PathVariable String token,@RequestBody Customer customer)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				AdminFacade service = (AdminFacade) session.getService();
				service.addCustomer(customer);
			}
			return ResponseEntity.ok(customer);
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@PutMapping("/updateCustomer/{token}")
	public ResponseEntity<?> updateCustomer(@PathVariable String token,@RequestBody Customer customer)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				AdminFacade service = (AdminFacade) session.getService();
				service.updateCustomer(customer);
			}
			return ResponseEntity.ok(customer);
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	@DeleteMapping("deleteCustomer/{token}/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable String token,@PathVariable int id)
	{
		try {
			Session session = sessionMap.get(token);
			if(session!=null)
			{
				session.setLastAccessed(System.currentTimeMillis());
				AdminFacade service = (AdminFacade) session.getService();
				service.deleteCustomer(id);
			}
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Cant delete");
		}
	}
	
	@GetMapping("/getAllCustomers/{token}")
	public ResponseEntity<List<Customer>> getAllCustomers(@PathVariable String token)
	{
		Session session = sessionMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		AdminFacade service = (AdminFacade) session.getService();
		return ResponseEntity.ok(service.getAllCustomers());
	}
	@GetMapping("/getOneCustomer/{token}/{id}")
	public ResponseEntity<?> getOneCustomer(@PathVariable String token,@PathVariable int id)
	{
		try {
			Session session = sessionMap.get(token);
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			return ResponseEntity.ok(service.getOneCustomer(id)); 
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("cant find");
		}
	}
	
}
