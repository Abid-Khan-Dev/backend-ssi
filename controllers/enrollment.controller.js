import Enrollment from "../models/Enrollment.js";
import { apiError, apiSuccess } from "../utils/response.js";

export const enroll = async (req, res) => {
  try {
    console.log(req.body);
    const { fullname, email, phone, course } = req.body;

    if (!fullname || !email || !phone || !course) {
      return apiError(res, "All fields are required.", 400);
    }

    const isExisting = await Enrollment.findOne({ email, course });
    if (isExisting) {
      return apiError(res, "You are already enrolled in this course.", 409);
    }
    const enrollment = new Enrollment({
      fullname,
      email,
      phone,
      course,
    });

    await enrollment.save();

    return apiSuccess(res, { enrollment }, "Enrollment Successfull!", 201);
  } catch (error) {
    return apiError(res, error.message);
  }
};
