import { Link } from "react-router-dom";

const DoctorList = () => {
  const doctors = [
    { doctorId: 1, patientId: 101 },
    { doctorId: 2, patientId: 202 },
  ];

  return (
    <div>
      <h1>Doctors</h1>

      {doctors.map((d) => (
        <div key={d.doctorId}>
          <Link
            to={`/doctors/${d.doctorId}/patients/${d.patientId}`}
          >
            View Doctor {d.doctorId} with Patient {d.patientId}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
