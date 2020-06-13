package main.exceptions;

public class TitleIsAlreadyTaken extends Exception {
public TitleIsAlreadyTaken()
{
	super("Title is already taken");
}
}
