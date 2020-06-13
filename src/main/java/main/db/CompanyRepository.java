package main.db;

import org.springframework.data.jpa.repository.JpaRepository;

import main.bean.Company;


public interface CompanyRepository extends JpaRepository<Company,Integer> {
	public Company findByEmailAndPassword(String email,String password);
	public Company findByNameOrEmail(String name,String email);
	
	public boolean existsByEmailAndPassword(String email,String password);
	public boolean existsByNameOrEmail(String name,String email);
}
