import Kalender from "../models/ModelKalender.js";

export const getKalender = async (req, res) => {
  try {
    const kalender = await Kalender.find();
    res.json(kalender);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getKalenderById = async (req, res) => {
  try {
    const kalender = await Kalender.findById({ _id: req.params.id });
    res.json(kalender);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveKalender = async (req, res) => {
  const kalender = new Kalender(req.body);
  try {
    const insertedkalender = await kalender.save();
    res.status(201).json(insertedkalender);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteKalender = async (req, res) => {
  try {
    const deletedKalender = await Kalender.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedKalender);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
