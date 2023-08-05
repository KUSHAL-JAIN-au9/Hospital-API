import Doctor from "../../../models/doctorSchema.js";
import Patient from "../../../models/patientSchema.js";
import Report from "../../../models/reportSchema.js";

export const reportCreateReport = async (req, res) => {
  console.log("Inside report controller");

  const doctor = req.doctor._id;
  console.log("Dr:" + doctor);

  try {
    console.log("Inside try");

    const report = await Report.create({
      doctor: doctor,
      patient: req.params.id,
      status: req.body.status,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    // Error handling
    return res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

//find patient with id and send report
export const reportAllReports = async (req, res) => {
  try {
    const reports = await Report.find({ patient: req.params.id });
    return res.send(reports);
  } catch (err) {
    // Error handling
    return res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

//send report by status
export const ReportrtByStatus = async (req, res) => {
  try {
    const reports = await Report.find({ status: req.params.status });
    return res.send(reports);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
