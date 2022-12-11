import mongoose from "mongoose";

const EventTypeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    EventSpec: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("EventType", EventTypeSchema);
