import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      trim: true,
      required: true,
    },
    fatherName: {
      type: String,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      minlength: 3,
      maxlength: 40,
      trim: true,
    },
    phoneNO: {
      type: String,
      maxlength: 20,
      trim: true,
      required: true,
    },
    education: {
      type: String,
      minlength: 3,
      maxlength: 100,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      minlength: 3,
      maxlength: 100,
      trim: true,
      required: true,
    },
    referredBy: {
      type: String,
      trim: true,
    },

    applyFor: {
      type: String,
      trim: true,
      required: true,
    },
    mongodbAtlasBackup: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;
