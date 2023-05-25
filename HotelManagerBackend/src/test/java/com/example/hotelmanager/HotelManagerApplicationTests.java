package com.example.hotelmanager;

import HotelManager.HotelManagerApplication;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringJUnitConfig
@ContextConfiguration(classes = {HotelManagerApplication.class})
class HotelManagerApplicationTests {

	@Test
	public void CITest(){
		String string = "Hello World!";
		assertEquals("Hello World!", string);
	}
}
