package main.bean;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Companies")
public class Company {

	@Column(name = "company_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	@Column(name = "company_name", updatable = false, nullable = false)
	private String name;
	@Column(name ="company_email", unique = true, nullable = false)
	private String email;
	@Column(name ="company_password", nullable = false)
	private String password;
	@JsonIgnore
	@OneToMany(mappedBy = "companyId", fetch = FetchType.EAGER)
	private List<Coupon> couponsList;
	
	

	public Company()
	{
		
	}
	
	public Company(String name, String email, String password) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	public List<Coupon> getCouponsList() {
		return couponsList;
	}
	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + "]";
	}
	
	

	
	
}
