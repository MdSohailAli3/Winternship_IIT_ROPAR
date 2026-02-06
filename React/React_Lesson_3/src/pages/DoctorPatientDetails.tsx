import { useParams } from "react-router-dom";

const DoctorPatientDetails = () => {
  const { doctorId, patientId } = useParams();

  if (!doctorId || !patientId) {
    return <div>Missing route parameters</div>;
  }

  const doctorNum = Number(doctorId);
  const patientNum = Number(patientId);

  if (isNaN(doctorNum) || isNaN(patientNum)) {
    return <div>Doctor ID and Patient ID must be numeric</div>;
  }

  return (
    <div>
      <h1>Doctor-Patient Details</h1>
      <p>Doctor ID: {doctorNum}</p>
      <p>Patient ID: {patientNum}</p>
    </div>
  );
};

export default DoctorPatientDetails;
