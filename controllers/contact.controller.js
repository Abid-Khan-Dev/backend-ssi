import Contact from "../models/Contact.js";
import { apiError, apiSuccess } from "../utils/response.js";

export const contact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    if (!fullname || !email || !message) {
      return apiError(res, "All fields are required.", 400);
    }
    const contact = new Contact({ fullname, email, message });

    await contact.save();
    return apiSuccess(res, { contact }, "Message received!", 201);
  } catch (error) {
    return apiError(res, error.message);
  }
};
