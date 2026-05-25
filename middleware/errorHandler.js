module.exports = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
};






// module.exports = (err, req, res, next) => {
//   let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   let message = err.message;

//   // Invalid MongoDB ID
//   if (err.name === "CastError") {
//     statusCode = 400;
//     message = "Invalid ID";
//   }

//   // Duplicate key (email)
//   if (err.code === 11000) {
//     statusCode = 400;
//     message = "Duplicate field value";
//   }

//   // JWT errors
//   if (err.name === "JsonWebTokenError") {
//     statusCode = 401;
//     message = "Invalid token";
//   }

//   if (err.name === "TokenExpiredError") {
//     statusCode = 401;
//     message = "Token expired";
//   }

//   res.status(statusCode).json({
//     success: false,
//     message,
//   });
// };