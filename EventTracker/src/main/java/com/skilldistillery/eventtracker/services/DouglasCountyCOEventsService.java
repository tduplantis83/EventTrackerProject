package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.DouglasCountyCOEvents;

public interface DouglasCountyCOEventsService {
	public List<DouglasCountyCOEvents> selectAll();
	public DouglasCountyCOEvents selectById(int id);
	public List<DouglasCountyCOEvents> selectByTitle(String title);
	public List<DouglasCountyCOEvents> selectByDesc(String desc);
	public List<DouglasCountyCOEvents> selectByCategory(String eventCategory);
	public List<DouglasCountyCOEvents> selectByStartDate(String beginDate, String endDate);
	public List<DouglasCountyCOEvents> selectByStartDateYear(int year);
	List<DouglasCountyCOEvents> selectByStartDateYearAndMonth(int year, int month);
	public List<DouglasCountyCOEvents> selectByLocation(String location);
	public List<DouglasCountyCOEvents> selectByStreetAddress(String street);
	public List<DouglasCountyCOEvents> selectByCity(String city);
	public List<DouglasCountyCOEvents> selectByState(String state);
	public List<DouglasCountyCOEvents> selectByZip(String zip);
	public List<DouglasCountyCOEvents> selectByKeyword(String keyword);
	public DouglasCountyCOEvents createEvent(DouglasCountyCOEvents event);
	public DouglasCountyCOEvents updateEvent(int id, DouglasCountyCOEvents event);
	public boolean deleteEvent(int id);
}
