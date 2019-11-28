package com.skilldistillery.eventtracker.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.DouglasCountyCOEvents;

public interface DouglasCountyCOEventsRepository extends JpaRepository <DouglasCountyCOEvents, Integer>{
	public DouglasCountyCOEvents findById(int id);
	public List<DouglasCountyCOEvents> findByTitleLikeIgnoreCase(String title);
	public List<DouglasCountyCOEvents> findByDescriptionLikeIgnoreCase(String desc);
	public List<DouglasCountyCOEvents> findByEventCategoryLikeIgnoreCase(String eventCategory);
	public List<DouglasCountyCOEvents> findByStartDateBetween(LocalDateTime begin, LocalDateTime end);
	public List<DouglasCountyCOEvents> findByLocationLikeIgnoreCase(String location);
	public List<DouglasCountyCOEvents> findByStreetLikeIgnoreCase(String street);
	public List<DouglasCountyCOEvents> findByCityLikeIgnoreCase(String city);
	public List<DouglasCountyCOEvents> findByStateIgnoreCase(String state);
	public List<DouglasCountyCOEvents> findByTitleLikeIgnoreCaseOrDescriptionLikeIgnoreCaseOrEventCategoryLikeIgnoreCaseOrLocationLikeIgnoreCaseOrCityLikeIgnoreCase(String keyword1, String keyword2, String keyword3, String keyword4, String keyword5);
	public List<DouglasCountyCOEvents> findByZip(String zip);
	
}
