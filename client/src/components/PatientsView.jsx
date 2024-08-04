import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPatients } from '../services/api';
import './PatientsView.css';

const PatientView = () => {
    const location = useLocation();
    const { name, code } = location.state || { name: '', code: '' };
    const [patients, setPatients] = useState([]);
    const [waitTime, setWaitTime] = useState('Calculating...');
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const result = await getPatients();
                console.log('Fetched Patients:', result.data); // Log fetched patients
                setPatients(result.data);
                calculateWaitTime(result.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
        const id = setInterval(fetchPatients, 60000); // Refresh every minute
        setIntervalId(id);

        return () => {
            clearInterval(id); // Cleanup interval on component unmount
            if (intervalId) clearInterval(intervalId); // Cleanup wait time interval
        };
    }, [name, code]);

    const calculateWaitTime = (patients) => {
        if (!patients || patients.length === 0) {
            setWaitTime('Not in queue');
            return;
        }

        const currentPatientIndex = patients.findIndex(
            (patient) => patient.name === name && patient.code === code
        );

        if (currentPatientIndex === -1) {
            setWaitTime('Not in queue');
            return;
        }

        const estimatedTime = 5 * 60 * 1000; // 5 minutes in milliseconds
        const waitEndTime = Date.now() + (currentPatientIndex * estimatedTime);

        // Store the wait end time in localStorage
        localStorage.setItem('waitEndTime', waitEndTime);

        const updateTime = () => {
            const storedWaitEndTime = localStorage.getItem('waitEndTime');
            const remainingTime = storedWaitEndTime ? Math.max(storedWaitEndTime - Date.now(), 0) : 0;

            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setWaitTime(`${hours}h ${minutes}m ${seconds}s`);
        };

        updateTime(); // Update immediately
        const id = setInterval(updateTime, 1000); // Update every second
        setIntervalId(id);

        return () => clearInterval(id); // Cleanup interval on component unmount
    };

    return (
        <div className="patient-view">
            <div className="loader-container">
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                </div>
                <p>Approximate Wait Time: {waitTime}</p>
            </div>
        </div>
    );
};

export default PatientView;
