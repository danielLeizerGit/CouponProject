package main.exceptions;

public class CustomerNotValid extends Exception {

	public CustomerNotValid()
	{
		super("Customer not valid, check values");
	}
}
