package main.exceptions;

public class LoginFailed extends Exception {
	public LoginFailed()
	{
		super("Login Failed, check password or email");
	}

}
