import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
  updateEventTypeAvailability,
} from "../controllers/eventType.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:eventid", verifyAdmin, createEvent);
//UPDATE
router.put("/availability/:id", updateEventTypeAvailability);
router.put("/:id", verifyAdmin, updateEvent);
//DELETE
router.delete("/:id/:eventid", verifyAdmin, deleteEvent);
//GET
router.get("/:id", getEvent);

//GET ALL
router.get("/", getEvents);

export default router;
