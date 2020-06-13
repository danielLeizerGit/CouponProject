package main.exceptions;

public class CouponNotValid extends Exception{
public CouponNotValid()
{
	super("Coupon is not valid.Check the amount and the stard/end date or that the title is not null");
}
}
