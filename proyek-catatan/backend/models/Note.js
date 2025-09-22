// backend/models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul catatan wajib diisi"],
    },
    content: {
      type: String,
      required: [true, "Isi catatan wajib diisi"],
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
