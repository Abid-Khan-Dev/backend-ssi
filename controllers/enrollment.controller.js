import Enrollment from "../models/Enrollment.js";
import { apiError, apiSuccess } from "../utils/response.js";

export const enroll = async (req, res) => {
  try {
    const {
      name,
      fatherName,
      education,
      address,
      applyFor,
      referredBy,
      email,
      phoneNO,
      terms,
    } = req.body;

    if (!name || !email || !phoneNO || !applyFor || !address || !terms) {
      return apiError(res, "All fields are required.", 400);
    }

    const isExisting = await Enrollment.findOne({ email, applyFor });
    if (isExisting) {
      return apiError(res, "You are already enrolled in this course.", 409);
    }
    const enrollment = new Enrollment({
      name,
      fatherName,
      education,
      address,
      applyFor,
      referredBy,
      email,
      phoneNO,
    });

    await enrollment.save();

    return apiSuccess(res, { enrollment }, "Enrollment Successfull!", 201);
  } catch (error) {
    return apiError(res, error.message);
  }
};
