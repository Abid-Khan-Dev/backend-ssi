export const apiSuccess = (
  res,
  data,
  message = "Success",
  statusCode = 200
) => {
  res.status(statusCode).json({ status: "success", message, data });
};

export const apiError = (
  res,
  message = "Error",
  statusCode = 500,
  errors = null
) => {
  res.status(statusCode).json({
    status: "error",
    message,
    errors,
  });
};
