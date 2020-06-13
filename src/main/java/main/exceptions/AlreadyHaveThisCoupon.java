package main.exceptions;

public class AlreadyHaveThisCoupon extends Exception {
public AlreadyHaveThisCoupon(){
	super("This Coupon Already been purchased");
}
}
