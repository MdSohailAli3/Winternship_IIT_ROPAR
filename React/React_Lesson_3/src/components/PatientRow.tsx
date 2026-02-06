import { Link } from "react-router-dom";

interface Props {
  patientId: string;
  appointmentId: string;
}

const PatientRow = ({ patientId, appointmentId }: Props) => {
  return (
    <Link
      to={`/patients/${patientId}/appointments/${appointmentId}`}
    >
      View Appointment
    </Link>
  );
};

export default PatientRow;
