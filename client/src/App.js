import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminView from './components/AdminView';
import PatientSignIn from './components/PatientSignIn';
import PatientView from './components/PatientsView';
import HomeVieww from './components/HomeVieww';

const App = () => (
    <Router>
        <div>
            <Routes>//every route for the app
                <Route path="/admin" element={<AdminView />} />
                <Route path="/signin" element={<PatientSignIn />} />
                <Route path="/view" element={<PatientView />} />
                <Route path="/" element={<HomeVieww />} />
            </Routes>
        </div>
    </Router>
);

export default App;
