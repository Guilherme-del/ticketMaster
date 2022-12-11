import Event from "../models/Events.js";
import EventType from "../models/eventType.js";

export const createEvent = async (req, res, next) => {
  const EventId = req.params.Eventid;
  const newEvent = new EventType(req.EventType);

  try {
    const savedEvent = await newEvent.save();
    try {
      await Event.findByIdAndUpdate(EventId, {
        $push: { eventTypes: savedEvent._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const updateEvent = await EventType.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateEvent);
  } catch (err) {
    next(err);
  }
};
export const updateEventTypeAvailability = async (req, res, next) => {
  try {
    await EventType.updateOne(
      { "eventNumbers._id": req.params.id },
      {
        $push: {
          "eventNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("event status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  const EventId = req.params.EventId;
  try {
    await EventType.findByIdAndDelete(req.params.id);
    try {
      await Event.findByIdAndUpdate(EventId, {
        $pull: { eventType: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Event has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const event = await EventType.findById(req.params.id);
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};
export const getEvents = async (req, res, next) => {
  try {
    const EventType = await EventType.find();
    res.status(200).json(EventType);
  } catch (err) {
    next(err);
  }
};
