package com.skilldistillery.eventtracker.repositories;

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
class DouglasCountyCOEventsRepositoryTest {
	
	@Autowired
	private DouglasCountyCOEventsRepository repo;

	@Test
	@DisplayName("test DouglasCountyCOEvents Repository FindByID")
	void test1() {
		DouglasCountyCOEvents event = repo.findById(13);
		assertEquals("Turkey Day 5K FUN Run/Walk", event.getTitle());
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByTitleLikeIgnoreCase")
	void test2() {
		List<DouglasCountyCOEvents> events = repo.findByTitleLikeIgnoreCase("%Turkey%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByDescriptionLikeIgnoreCase")
	void test3() {
		List<DouglasCountyCOEvents> events = repo.findByDescriptionLikeIgnoreCase("%Thanksgiving%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByEventCategoryLikeIgnoreCase")
	void test4() {
		List<DouglasCountyCOEvents> events = repo.findByDescriptionLikeIgnoreCase("%race%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByStartDateBetween")
	void test5() {
		LocalDateTime begin = LocalDateTime.parse("2018-12-09T00:00:00");
		LocalDateTime end = LocalDateTime.parse("2019-12-09T00:00:00");
		
		List<DouglasCountyCOEvents> events = repo.findByStartDateBetween(begin, end);
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByLocationLikeIgnoreCase")
	void test6() {		
		List<DouglasCountyCOEvents> events = repo.findByLocationLikeIgnoreCase("%Library%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByStreetLikeIgnoreCase")
	void test7() {		
		List<DouglasCountyCOEvents> events = repo.findByStreetLikeIgnoreCase("%Wilcox%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByCityLikeIgnoreCase")
	void test8() {		
		List<DouglasCountyCOEvents> events = repo.findByCityLikeIgnoreCase("%Castle%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByStateIgnoreCase")
	void test9() {		
		List<DouglasCountyCOEvents> events = repo.findByStateIgnoreCase("co");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByTitleLikeIgnoreCaseOrDescriptionLikeIgnoreCaseOrEventCategoryLikeIgnoreCaseOrLocationLikeIgnoreCaseOrCityLikeIgnoreCase")
	void test10() {	
		String keyword = "Christmas";
		List<DouglasCountyCOEvents> events = repo.findByTitleLikeIgnoreCaseOrDescriptionLikeIgnoreCaseOrEventCategoryLikeIgnoreCaseOrLocationLikeIgnoreCaseOrCityLikeIgnoreCase(
				"%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%",
				"%" + keyword + "%");
		assertTrue(events.size() > 0);
	}
	
	@Test
	@DisplayName("test DouglasCountyCOEvents Repository findByZip")
	void test11() {	
		List<DouglasCountyCOEvents> events = repo.findByZip("80109");
		assertTrue(events.size() > 0);
	}
	
	
}


