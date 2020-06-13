package main.bean;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;



@Entity
@Table(name = "Coupons")
public class Coupon {
	@Column(name = "coupon_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JoinColumn(name = "company_id",updatable = false)
	@ManyToOne()
	private Company companyId;
	@Column(name = "category_id")
	private Category category;
	@Column(name = "title", nullable = false)
	private String title;
	@Column(name = "description")
	private String description;
	@Column(name = "start_date")
	private Date startDate;
	@Column(name = "end_date")
	private Date endDate;
	@Column(name = "amount")
	@Min(value = 0)
	private int amount; 
	@Column(name = "price") 
	@Min(value = 0)
	private double price; 
	@Column(name = "image")
	private String image;
	
	
	public Coupon()
	{
		
	}
	public Coupon(int id) //for this testing
	{
		this.id=id;
	}
	
	//for this testing
	public Coupon(Company companyId, Category category, String title, String description, Date startDate, Date endDate,
			int amount, double price, String image) {
		super();
		this.companyId = companyId;
		this.category = category;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.price = price;
		this.image = image;
	}
	public Coupon(Category category, String title, String description, Date startDate, Date endDate,
			int amount, double price, String image) {
		super();
		this.category = category;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.price = price;
		this.image = image;
	}
	@Override
	public int hashCode()
	{
		return id;
	}

	
	@Override
	public boolean equals(Object obj)
	{
		if(!(obj instanceof Coupon))
			return false;
		return this.id ==((Coupon)obj).id;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	public void setCompanyId(Company company)
	{
		this.companyId = company;
	}

	public int getId() {
		return id;
	}

	public Company getCompanyId() {
		return companyId;
	}

	public Date getStartDate() {
		return startDate;
	}

	@Override
	public String toString() {
		return "Coupon [id=" + id + ", companyId=" + companyId + ", category=" + category + ", title=" + title
				+ ", description=" + description + ", startDate=" + startDate + ", endDate=" + endDate + ", amount="
				+ amount + ", price=" + price + ", image=" + image + "]";
	}
	
	
	
	
	
}
