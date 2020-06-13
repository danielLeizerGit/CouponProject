package main.exceptions;

public class EmaiIsTaken extends Exception{
	public EmaiIsTaken()
	{
		super("Email is taken");
	}

}
