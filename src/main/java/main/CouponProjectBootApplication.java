package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;



@SpringBootApplication
public class CouponProjectBootApplication {

	public static void main(String[] args) {
	ConfigurableApplicationContext	ctx = SpringApplication.run(CouponProjectBootApplication.class, args);
	
	System.out.println("test run");
		JobThread job = ctx.getBean(JobThread.class);
		job.start();
//		
//		Test test = ctx.getBean(Test.class);
//		test.TestAll();
//		
//		job.StopRun();
//		job.interrupt();
	}
}