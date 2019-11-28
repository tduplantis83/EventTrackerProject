package com.skilldistillery.eventtracker.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.DouglasCountyCOEvents;
import com.skilldistillery.eventtracker.repositories.DouglasCountyCOEventsRepository;

@Service
public class DouglasCountyCOEventsServiceImpl implements DouglasCountyCOEventsService{

	@Autowired
	private DouglasCountyCOEventsRepository repo;

	@Override
	public List<DouglasCountyCOEvents> selectAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByTitle(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByDesc(String desc) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByCategory(String eventCategory) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByStartDate(LocalDateTime beginDate, LocalDateTime endDate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByLocation(String location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByStreetAddress(String street) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByCity(String city) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByState(String state) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByZip(String zip) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DouglasCountyCOEvents> selectByKeyword(String keyword) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DouglasCountyCOEvents createEvent(DouglasCountyCOEvents event) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DouglasCountyCOEvents updateEvent(int id, DouglasCountyCOEvents event) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteEvent(int id) {
		// TODO Auto-generated method stub
		return false;
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
		if (event.getTitle() == null || event.getDescription() == null || event.getEventCategory() == null || event.getStartDate() == null
				|| event.getEndDate() == null || event.getState() == null) {
			return false;
		} else {
			return true;
		}
	}
	
}
