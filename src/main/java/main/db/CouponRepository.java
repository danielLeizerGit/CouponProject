package main.db;




import java.sql.Date;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import main.bean.Category;
import main.bean.Company;
import main.bean.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, Integer> {

	public List<Coupon> findByEndDateBefore(Date date);
	public List<Coupon> findByCategory(Category category);
	public List<Coupon> findByCompanyIdAndTitle(int Companyid,String title);
	
	public List<Coupon> findByCompanyId(Company companyId);
	public List<Coupon> findByCompanyIdAndCategory(Company companyId,Category category);
	public List<Coupon> findByCompanyIdAndPriceLessThanEqual(Company companyId,double price);
	
	
	
	public boolean existsByCompanyIdAndTitle(Company Companyid,String title);
	public boolean existsByCompanyIdAndId(Company companyid,int id);
	
}
