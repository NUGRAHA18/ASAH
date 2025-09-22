// backend/controllers/noteController.js
import Note from "../models/Note.js";

// GET semua catatan
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET catatan by ID
export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note)
      return res.status(404).json({ message: "Catatan tidak ditemukan" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE catatan baru
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE catatan
export const updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNote)
      return res.status(404).json({ message: "Catatan tidak ditemukan" });
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE catatan
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Catatan tidak ditemukan" });
    res.json({ message: "Catatan berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
