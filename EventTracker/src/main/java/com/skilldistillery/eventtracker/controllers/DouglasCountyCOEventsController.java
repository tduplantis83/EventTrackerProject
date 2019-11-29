package com.skilldistillery.eventtracker.controllers;

import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.DouglasCountyCOEvents;
import com.skilldistillery.eventtracker.services.DouglasCountyCOEventsService;

@RestController
@RequestMapping("api")
public class DouglasCountyCOEventsController {
	@Autowired
	private DouglasCountyCOEventsService svc;
	
	@GetMapping("events")
	public List<DouglasCountyCOEvents> getAllEvents(HttpServletRequest req, HttpServletResponse resp) {

		List<DouglasCountyCOEvents> results = svc.selectAll();

		if (results.size() == 0) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;


	}

	@GetMapping("events/{id}")
	public DouglasCountyCOEvents getEventById(@PathVariable Integer id, HttpServletRequest req, HttpServletResponse resp) {

		DouglasCountyCOEvents result = svc.selectById(id);
		if (result == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return result;

	}
	
	@GetMapping("events/search/title/{title}")
	public List<DouglasCountyCOEvents>  getEventByTitle(@PathVariable String title, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByTitle(title);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}

	@GetMapping("events/search/description/{desc}")
	public List<DouglasCountyCOEvents>  getEventByDesc(@PathVariable String desc, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByDesc(desc);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/category/{cat}")
	public List<DouglasCountyCOEvents>  getEventByCat(@PathVariable String cat, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByCategory(cat);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/dateRange/{start}/{end}")
	public List<DouglasCountyCOEvents>  getEventByStartDate(@PathVariable String start, @PathVariable String end, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByStartDate(start, end);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/year/{year}")
	public List<DouglasCountyCOEvents>  getEventByStartDateYear(@PathVariable int year, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByStartDateYear(year);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/year/month/{year}/{month}")
	public List<DouglasCountyCOEvents>  getEventByStartDateYearMonth(@PathVariable int year, @PathVariable int month, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByStartDateYearAndMonth(year, month);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/location/{location}")
	public List<DouglasCountyCOEvents>  getEventByLocation(@PathVariable String location, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByLocation(location);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/street/{street}")
	public List<DouglasCountyCOEvents>  getEventByStreet(@PathVariable String street, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByStreetAddress(street);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/city/{city}")
	public List<DouglasCountyCOEvents>  getEventByCity(@PathVariable String city, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByCity(city);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/state/{state}")
	public List<DouglasCountyCOEvents>  getEventByState(@PathVariable String state, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByState(state);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/zip/{zip}")
	public List<DouglasCountyCOEvents>  getEventByZip(@PathVariable String zip, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByZip(zip);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@GetMapping("events/search/{keyword}")
	public List<DouglasCountyCOEvents>  getEventByKeyword(@PathVariable String keyword, HttpServletRequest req, HttpServletResponse resp) {
		
		List<DouglasCountyCOEvents> results = svc.selectByKeyword(keyword);
		if (results == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(200);
		}
		return results;
		
	}
	
	@PostMapping("events")
	public DouglasCountyCOEvents createNewEvent(@RequestBody DouglasCountyCOEvents d, HttpServletRequest req, HttpServletResponse resp) {

		try {
			// try to create the provided post
			d = svc.createEvent(d);
			// if successful, send 201
			resp.setStatus(201);
			// get the link to the created post
			// return that in the Location header
			StringBuffer url = req.getRequestURL();
			url.append("/").append(d.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			// if creation fails, return 400 error
			e.printStackTrace();
			resp.setStatus(400);
			// set the returning post to null
			d = null;
		}

		return d;
	}
	
	@PutMapping("events/{id}")
	public DouglasCountyCOEvents updateEventById(@PathVariable Integer id, @RequestBody DouglasCountyCOEvents d, HttpServletRequest req,
			HttpServletResponse resp) {

		try {
			// try to update the provided post
			d = svc.updateEvent(id, d);
			if(d==null) {
				resp.setStatus(404);
			}
			// if successful, send 200
			resp.setStatus(200);
		} catch (Exception e) {
			// if update fails, return 404 error
			e.printStackTrace();
			resp.setStatus(400);
			// set the returning post to null
			d = null;
		}

		return d;

	}
	
	@DeleteMapping("events/{id}")
	public void deleteEventById(@PathVariable Integer id, HttpServletRequest req, HttpServletResponse resp) {
		
		try {
			if (svc.deleteEvent(id)) {
				// if successful, send 204 - no content to send back
				resp.setStatus(204);
			} else {
				// if false, id doesn't exist
				// return 404 - not found
				resp.setStatus(404);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			resp.setStatus(400);
		}

	}
	
}
