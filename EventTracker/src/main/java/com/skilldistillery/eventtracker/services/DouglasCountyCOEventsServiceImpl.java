package com.skilldistillery.eventtracker.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.DouglasCountyCOEvents;
import com.skilldistillery.eventtracker.repositories.DouglasCountyCOEventsRepository;

@Service
public class DouglasCountyCOEventsServiceImpl implements DouglasCountyCOEventsService {

	@Autowired
	private DouglasCountyCOEventsRepository repo;

	@Override
	public List<DouglasCountyCOEvents> selectAll() {
		return repo.findAll();
	}

	@Override
	public DouglasCountyCOEvents selectById(int id) {
		return repo.findById(id);
	}

	@Override
	public List<DouglasCountyCOEvents> selectByTitle(String title) {
		return repo.findByTitleLikeIgnoreCase("%" + title + "%");
	}

	@Override
	public List<DouglasCountyCOEvents> selectByDesc(String desc) {
		return repo.findByDescriptionLikeIgnoreCase("%" + desc + "%");
	}

	@Override
	public List<DouglasCountyCOEvents> selectByCategory(String eventCategory) {
		return repo.findByEventCategoryLikeIgnoreCase("%" + eventCategory + "%");
	}

	@Override
	public List<DouglasCountyCOEvents> selectByStartDate(String beginDate, String endDate) {
		LocalDateTime s = LocalDateTime.parse(beginDate);
		LocalDateTime e = LocalDateTime.parse(endDate);
		
		return repo.findByStartDateBetween(s, e);
	}
	
	@Override
	public List<DouglasCountyCOEvents> selectByStartDateYear(int year) {
		List<DouglasCountyCOEvents> allEvents = repo.findAll();
		List<DouglasCountyCOEvents> results = new ArrayList<>();
		
		for (DouglasCountyCOEvents event : allEvents) {
			if(event.getStartDate().getYear() == year) {
				results.add(event);
			}
		}
		return results;
	}
	
	@Override
	public List<DouglasCountyCOEvents> selectByStartDateYearAndMonth(int year, int month) {
		List<DouglasCountyCOEvents> allEvents = repo.findAll();
		List<DouglasCountyCOEvents> results = new ArrayList<>();
		
		for (DouglasCountyCOEvents event : allEvents) {
			if(event.getStartDate().getYear() == year && event.getStartDate().getMonthValue() == month) {
				results.add(event);
			}
		}
		return results;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByLocation(String location) {
		return repo.findByLocationLikeIgnoreCase("%" + location + "%");
	}

	@Override
	public List<DouglasCountyCOEvents> selectByStreetAddress(String street) {
		return repo.findByStreetLikeIgnoreCase("%" + street + "%");
	}

	@Override
	public List<DouglasCountyCOEvents> selectByCity(String city) {
		return repo.findByCityLikeIgnoreCase("%" + city + "%");
	}

	@Override
	public List<DouglasCountyCOEvents> selectByState(String state) {
		return repo.findByStateIgnoreCase(state);
	}

	@Override
	public List<DouglasCountyCOEvents> selectByZip(String zip) {
		return repo.findByZip(zip);
	}

	@Override
	public List<DouglasCountyCOEvents> selectByKeyword(String keyword) {
		return repo
				.findByTitleLikeIgnoreCaseOrDescriptionLikeIgnoreCaseOrEventCategoryLikeIgnoreCaseOrLocationLikeIgnoreCaseOrCityLikeIgnoreCase(
						"%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%",
						"%" + keyword + "%");
	}

	@Override
	public DouglasCountyCOEvents createEvent(DouglasCountyCOEvents event) {
		// make sure given event has ALL required fields
		if (entityNulls(event)) {
			return repo.saveAndFlush(event);
		} else {
			return null;
		}
	}

	@Override
	public DouglasCountyCOEvents updateEvent(int id, DouglasCountyCOEvents event) {
		DouglasCountyCOEvents toUpdate = repo.findById(id);
		// if an event by that id exists
		// and event still has ALL required fields
		// we can update as requested by user
		if (toUpdate != null && entityNulls(event)) {
			//REQUIRED FIELDS
			toUpdate.setTitle(event.getTitle());
			toUpdate.setDescription(event.getDescription());
			toUpdate.setEventCategory(event.getEventCategory());
			toUpdate.setStartDate(event.getStartDate());
			toUpdate.setEndDate(event.getEndDate());
			toUpdate.setState(event.getState());
			
			//ALLOWED NULLS
			if(event.getLocation() != null) {
				toUpdate.setLocation(event.getLocation());
			}
			if(event.getStreet() != null) {
				toUpdate.setStreet(event.getStreet());
			}
			if(event.getCity() != null) {
				toUpdate.setCity(event.getCity());
			}
			if(event.getZip() != null) {
				toUpdate.setZip(event.getZip());
			}
			
			return repo.saveAndFlush(toUpdate);
		}
		return null;
	}

	@Override
	public boolean deleteEvent(int id) {
		// if post id exists, delete it
		// return true
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		} else {
			return false;
		}
	}

	private boolean entityNulls(DouglasCountyCOEvents event) {
		/*
		 * REQUIRED (NON-NULL ALLOWED) FIELDS 
		 * title 
		 * description 
		 * eventCategory 
		 * startDate
		 * endDate 
		 * state
		 */

		// if required fields are null/0
		// cannot create new Post
		// return null
		if (event.getTitle() == null || event.getDescription() == null || event.getEventCategory() == null
				|| event.getStartDate() == null || event.getEndDate() == null || event.getState() == null) {
			return false;
		} else {
			return true;
		}
	}

}
