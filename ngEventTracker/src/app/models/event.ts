export class Event {
  id: number;
  title: string;
  description: string;
  eventCategory: string;
  startDate: Date;
  endDate: Date;
  location: string;
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(
    id?: number,
    title?: string,
    description?: string,
    eventCategory?: string,
    startDate?: Date,
    endDate?: Date,
    location?: string,
    street?: string,
    city?: string,
    state?: string,
    zip?: string
  ) {
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
}
