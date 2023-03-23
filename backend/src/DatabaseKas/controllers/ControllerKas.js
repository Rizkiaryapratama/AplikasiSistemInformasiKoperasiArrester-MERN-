import Kas from "../models/ModelKas.js";

export const getKas = async (req, res) => {
  try {
    const kas = await Kas.find();
    res.json(kas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getKasById = async (req, res) => {
  try {
    const kas = await Kas.findById({ _id: req.params.id });
    res.json(kas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveKas = async (req, res) => {
  const kas = new Kas(req.body);
  try {
    const insertedkas = await kas.save();
    res.status(201).json(insertedkas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateKas = async (req, res) => {
  try {
    const updatedkas = await Kas.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedkas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteKas = async (req, res) => {
  try {
    const deletedkas = await Kas.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedkas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
