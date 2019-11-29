package com.skilldistillery.eventtracker.services;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.DouglasCountyCOEvents;

@RunWith(SpringRunner.class)
@SpringBootTest
class DouglasCountyCOEventsServiceTest {
	
	@Autowired
	private DouglasCountyCOEventsService svc;
	
	private static DouglasCountyCOEvents d = new DouglasCountyCOEvents();

	
	@BeforeAll
	public static void setUp() {
		d.setTitle("JUnit CREATE Test Event");
		d.setDescription("Desc");
		d.setEventCategory("Test");
		d.setStartDate(LocalDateTime.now());
		d.setEndDate(LocalDateTime.parse("2019-12-31T23:59:59"));
		d.setState("CO");
	}
	
	@AfterAll
	public static void tearDown() {
		d = null;
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectAll")
	void test1() {
		List<DouglasCountyCOEvents> events = svc.selectAll();
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectById")
	void test2() {
		DouglasCountyCOEvents event = svc.selectById(13);
		assertEquals("Turkey Day 5K FUN Run/Walk", event.getTitle());
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByTitle")
	void test3() {
		List<DouglasCountyCOEvents> events  = svc.selectByTitle("Turkey");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByDesc")
	void test4() {
		List<DouglasCountyCOEvents> events  = svc.selectByDesc("tickets");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByCategory")
	void test5() {
		List<DouglasCountyCOEvents> events  = svc.selectByCategory("music");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByStartDate")
	void test6() {
		List<DouglasCountyCOEvents> events  = svc.selectByStartDate("2018-02-10T20:00:00", "2019-12-31T20:00:00");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByStartDateYear")
	void test7() {
		List<DouglasCountyCOEvents> events  = svc.selectByStartDateYear(2019);
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByStartDateYearAndMonth")
	void test8() {
		List<DouglasCountyCOEvents> events  = svc.selectByStartDateYearAndMonth(2019, 12);
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByLocation")
	void test9() {
		List<DouglasCountyCOEvents> events  = svc.selectByLocation("Library");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByStreetAddress")
	void test10() {
		List<DouglasCountyCOEvents> events  = svc.selectByStreetAddress("Wilcox");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByCity")
	void test11() {
		List<DouglasCountyCOEvents> events  = svc.selectByCity("Pine");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByState")
	void test12() {
		List<DouglasCountyCOEvents> events  = svc.selectByState("co");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByZip")
	void test13() {
		List<DouglasCountyCOEvents> events  = svc.selectByZip("80104");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service selectByKeyword")
	void test14() {
		List<DouglasCountyCOEvents> events  = svc.selectByKeyword("Christmas");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service createEvent")
	void test15() {
		DouglasCountyCOEvents event  = svc.createEvent(d);
		assertEquals("JUnit CREATE Test Event", event.getTitle());
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service updateEvent")
	void test16() {
		d.setTitle("JUnit UPDATED Test Event");
		DouglasCountyCOEvents event  = svc.updateEvent(d.getId(), d);
		assertEquals("JUnit UPDATED Test Event", event.getTitle());
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Service deleteEvent")
	void test17() {
		assertTrue(svc.deleteEvent(d.getId()));
	}

}
