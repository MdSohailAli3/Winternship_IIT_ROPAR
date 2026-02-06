import { useParams } from "react-router-dom";

const AppointmentDetails = () => {
  const { patientId, appointmentId } = useParams();

  if (!patientId || !appointmentId) {
    return <div>Missing route parameters</div>;
  }

  const apptId = Number(appointmentId);
  if (isNaN(apptId)) {
    return <div>Invalid appointment ID</div>;
  }

  return (
    <div>
      <h1>Patient ID: {patientId}</h1>
      <h2>Appointment ID: {apptId}</h2>
    </div>
  );
};

export default AppointmentDetails;
