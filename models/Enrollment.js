import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
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
    phone: {
      type: String,
      maxlength: 20,
      trime: true,
      required: true,
      default: "",
    },
    course: {
      type: String,
      trime: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;
