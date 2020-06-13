package main.db;




import org.springframework.data.jpa.repository.JpaRepository;


import main.bean.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	 Customer findByEmailAndPassword(String email,String password);
	 Customer findByEmail(String email);
	 
	
	 boolean existsByEmailAndPassword(String email,String password);
	 boolean existsByEmail(String email);
	 

}
