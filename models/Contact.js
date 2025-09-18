import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      minlength: 3,
      maxlength: 20,
      trime: true,
      required: true,
    },
    email: {
      type: String,
      minlength: 3,
      maxlength: 40,
      trime: true,
      unique: true,
      required: true,
    },
    message: {
      type: String,
      maxlength: 150,
      trime: true,
      default: "",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
