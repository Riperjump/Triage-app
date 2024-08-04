import React, { useEffect, useState } from 'react';
import { getPatients, deletePatient } from '../services/api';
import './AdminView.css'; // Import the CSS file for styles

const AdminView = () => {
    const [patients, setPatients] = useState([]);
    const [counters, setCounters] = useState(3); // Number of counters
    const [totalServices, setTotalServices] = useState(0);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const result = await getPatients();
                setPatients(result.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
        const id = setInterval(fetchPatients, 60000); // Refresh every minute
        return () => clearInterval(id); // Cleanup interval on component unmount
    }, []);

    const handleServeNext = async (counterIndex) => {
        if (patients.length > 0) {
            const nextPatient = patients.shift(); // Get the next patient

            try {
                // Call the API to delete the patient
                await fetch(`http://localhost:5000/api/patients/${nextPatient.id}`, {
                    method: 'DELETE',
                });

                // Update the UI
                setPatients([...patients]); // Refresh the patient list
                setTotalServices(totalServices + 1);
            } catch (error) {
                console.error('Error serving patient:', error);
            }
        } else {
            alert('Queue is empty.');
        }
    };

    const sortedPatients = patients.sort((a, b) => {
        if (a.severity === b.severity) {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
        return b.severity - a.severity;
    });

    return (
        <div className="admin-view-container">
            <h1>Admin View</h1>
            <div className="patient-list">
                {sortedPatients.length > 0 ? (
                    sortedPatients.map((patient) => (
                        <div className="patient-card" key={patient._id}>
                            <div className="patient-info">
                                <div className="patient-name">
                                    <i className="fas fa-user"></i>
                                    {patient.name}
                                </div>
                                <div className="patient-code">
                                    Code: {patient.code}
                                </div>
                                <div className="patient-severity">
                                    Severity: {patient.severity}
                                </div>
                            </div>
                            <button
                                className="serve-button"
                                onClick={() => handleServeNext()}
                            >
                                Serve Next
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No patients in the queue.</p>
                )}
            </div>
            <div className="counters">
                {Array.from({ length: counters }, (_, index) => (
                    <div className="counter" key={index} id={`counter${index + 1}`}>
                        <i className="fas fa-user counter-icon"></i>
                        <div className="counter-number">0</div>
                        <div className="counter-service"></div>
                        <button
                            className="counter-button"
                            onClick={() => handleServeNext(index + 1)}
                        >
                            Serve Next
                        </button>
                    </div>
                ))}
            </div>
            <div className="total-services">
                <p>Total Services Given Today: <span id="totalServices">{totalServices}</span></p>
            </div>
        </div>
    );
};

export default AdminView;
