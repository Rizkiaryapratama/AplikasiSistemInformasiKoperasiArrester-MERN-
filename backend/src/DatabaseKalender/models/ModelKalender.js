import mongoose from "mongoose";

const kalender = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  allDay: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Kalender", kalender);
