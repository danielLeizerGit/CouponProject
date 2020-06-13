package main.web;


import main.facade.ClientFacade;

public class Session {

	private ClientFacade service;
	private long lastAccessed;
	
	public Session(ClientFacade service,long lastAccessed)
	{
		this.service=service;
		this.lastAccessed=lastAccessed;
	}
	
	public ClientFacade getService()
	{
		return service;
	}
	
	public long getLastAccessed() {
		return lastAccessed;
	}
	public void setLastAccessed(long lastAccessed)
	{
		this.lastAccessed=lastAccessed;
	}
}
