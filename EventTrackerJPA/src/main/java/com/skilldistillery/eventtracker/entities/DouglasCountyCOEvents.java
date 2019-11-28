package com.skilldistillery.eventtracker.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="douglas_county_co_events")
public class DouglasCountyCOEvents {
	/*
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| id             | int(11)      | NO   | PRI | NULL    | auto_increment |
| title          | varchar(200) | NO   |     | NULL    |                |
| description    | text         | NO   |     | NULL    |                |
| event_category | varchar(100) | NO   |     | NULL    |                |
| start_date     | datetime     | NO   |     | NULL    |                |
| end_date       | datetime     | NO   |     | NULL    |                |
| location       | varchar(500) | YES  |     | NULL    |                |
| street         | varchar(200) | YES  |     | NULL    |                |
| city           | varchar(100) | YES  |     | NULL    |                |
| state          | varchar(2)   | NO   |     | NULL    |                |
| zip            | varchar(5)   | YES  |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+
	 */
	
////////START OF FIELDS////////
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	private String description;
	
	@Column(name="event_category")
	private String eventCategory;
	
	@Column(name="start_date")
	private LocalDateTime startDate;
	
	@Column(name="end_date")
	private LocalDateTime endDate;
	
	private String location;
	
	private String street;
	
	private String city;
	
	private String state;
	
	private String zip;

	
	////////END OF FIELDS////////
	////////START OF CONSTRUCTORS////////
	
	public DouglasCountyCOEvents() {
		super();
	}
	
	public DouglasCountyCOEvents(int id, String title, String description, String eventCategory,
			LocalDateTime startDate, LocalDateTime endDate, String location, String street, String city, String state,
			String zip) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.eventCategory = eventCategory;
		this.startDate = startDate;
		this.endDate = endDate;
		this.location = location;
		this.street = street;
		this.city = city;
		this.state = state;
		this.zip = zip;
	}

	////////END OF CONSTRUCTORS////////
	////////START OF GETTERS & SETTERS////////


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getEventCategory() {
		return eventCategory;
	}


	public void setEventCategory(String eventCategory) {
		this.eventCategory = eventCategory;
	}


	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getZip() {
		return zip;
	}


	public void setZip(String zip) {
		this.zip = zip;
	}





	////////END OF GETTERS & SETTERS////////
	////////START OF HASH CODE////////
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
		result = prime * result + ((eventCategory == null) ? 0 : eventCategory.hashCode());
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		result = prime * result + ((street == null) ? 0 : street.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		result = prime * result + ((zip == null) ? 0 : zip.hashCode());
		return result;
	}
	
	
	////////END OF HASH CODE////////
	////////START OF EQUALS////////
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DouglasCountyCOEvents other = (DouglasCountyCOEvents) obj;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (endDate == null) {
			if (other.endDate != null)
				return false;
		} else if (!endDate.equals(other.endDate))
			return false;
		if (eventCategory == null) {
			if (other.eventCategory != null)
				return false;
		} else if (!eventCategory.equals(other.eventCategory))
			return false;
		if (id != other.id)
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		if (street == null) {
			if (other.street != null)
				return false;
		} else if (!street.equals(other.street))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		if (zip == null) {
			if (other.zip != null)
				return false;
		} else if (!zip.equals(other.zip))
			return false;
		return true;
	}


	////////END OF EQUALS////////
	////////START OF TO STRING////////
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("DouglasCountyCOEvents [id=");
		builder.append(id);
		builder.append(", title=");
		builder.append(title);
		builder.append(", description=");
		builder.append(description);
		builder.append(", eventCategory=");
		builder.append(eventCategory);
		builder.append(", startDate=");
		builder.append(startDate);
		builder.append(", endDate=");
		builder.append(endDate);
		builder.append(", location=");
		builder.append(location);
		builder.append(", street=");
		builder.append(street);
		builder.append(", city=");
		builder.append(city);
		builder.append(", state=");
		builder.append(state);
		builder.append(", zip=");
		builder.append(zip);
		builder.append("]");
		return builder.toString();
	}
	
	////////END OF TO STRING////////
	
}
