import { Routes, Route } from "react-router-dom";
import AppointmentDetails from "./pages/AppointmentDetails";
import DoctorPatientDetails from "./pages/DoctorPatientDetails";
import DoctorList from "./components/DoctorList";

const App = () => {
  return (
    <Routes>
      {/* Case study route */}
      <Route
        path="/patients/:patientId/appointments/:appointmentId"
        element={<AppointmentDetails />}
      />

      {/* Challenge route (Section 6) */}
      <Route
        path="/doctors/:doctorId/patients/:patientId"
        element={<DoctorPatientDetails />}
      />

      {/* Entry page */}
      <Route path="/" element={<DoctorList />} />
    </Routes>
  );
};

export default App;
