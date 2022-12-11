import Event from "../models/Events.js";
import EventType from "../models/eventType.js";

export const createEvent = async (req, res, next) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json("Event has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const events = await Event.findById(req.params.id);
    res.status(200).json(events);

  } catch (err) {
    next(err);
  }
};

export const getEvents = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const events = await Event.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Event.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const eventCount = await Event.countDocuments({ type: "event" });
    const eventTypeCount = await Event.countDocuments({ type: "type" });

    res.status(200).json([
      { type: "event", count: eventCount },
      { type: "eventType", count: eventTypeCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getEventTypes = async (req, res, next) => {
  try {
    const events = await Event.findById(req.params.id);
    const list = await Promise.all(
      events.rooms.map((typo) => {
        return EventType.findById(typo);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
