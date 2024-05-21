import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res
      .status(200)
      .json({ success: true, message: "Successfully", data: reviews });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.params.userId;

  const newReview = new Review(req.body);

  try {
    const svaedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: svaedReview._id },
    });
    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: svaedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
