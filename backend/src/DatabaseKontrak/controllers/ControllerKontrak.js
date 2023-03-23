import Kontrak from "../models/ModelKontrak.js";

export const getKontrak = async (req, res) => {
  try {
    const kontrak = await Kontrak.find();
    res.json(kontrak);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getKontrakById = async (req, res) => {
  try {
    const kontrak = await Kontrak.findById({ _id: req.params.id });
    res.json(kontrak);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveKontrak = async (req, res) => {
  const kontrak = new Kontrak(req.body);
  try {
    const insertedkontrak = await kontrak.save();
    res.status(201).json(insertedkontrak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateKontrak = async (req, res) => {
  try {
    const updatedkontrak = await Kontrak.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedkontrak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteKontrak = async (req, res) => {
  try {
    const deletedkontrak = await Kontrak.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedkontrak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
