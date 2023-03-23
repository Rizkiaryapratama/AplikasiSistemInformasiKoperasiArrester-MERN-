import BebanUsaha from "../models/ModelBebanUsaha.js";

export const getBebanUsaha = async (req, res) => {
  try {
    const bebanusaha = await BebanUsaha.find();
    res.json(bebanusaha);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBebanUsahaById = async (req, res) => {
  try {
    const bebanusaha = await BebanUsaha.findById({ _id: req.params.id });
    res.json(bebanusaha);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveBebanUsaha = async (req, res) => {
  const bebanusaha = new BebanUsaha(req.body);
  try {
    const insertedbebanusaha = await bebanusaha.save();
    res.status(201).json(insertedbebanusaha);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBebanUsaha = async (req, res) => {
  try {
    const updatedbebanusaha = await BebanUsaha.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedbebanusaha);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBebanUsaha = async (req, res) => {
  try {
    const deletedbebanusaha = await BebanUsaha.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedbebanusaha);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
