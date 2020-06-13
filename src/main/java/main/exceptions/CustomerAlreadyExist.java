package main.exceptions;

public class CustomerAlreadyExist extends Exception {
public CustomerAlreadyExist()
{
	super("Customer already exists");
}
}
