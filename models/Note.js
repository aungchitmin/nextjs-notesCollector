import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please provide a title for this note."],
      maxlength: [60, "Title cannot be more than 60 characters"],
    },
    description: {
      type: String,

      maxlength: [300, "Owner's Name cannot be more than 60 characters"],
    },
    type: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
