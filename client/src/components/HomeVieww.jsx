import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeVieww.css'
export const HomeView = () => {
    const navigate = useNavigate();

    const navigateToSignIn=()=>{
        navigate('/signin')
    }
    const navigateToQueue = () => {
        navigate('/view');
      };

    return (
        <div className="home-container">
            <h1>Welcome to the Hospital Triage System</h1>
            <button className="home-button" onClick={navigateToSignIn}>Register in the queue</button>
        </div>
  )
}
export default HomeView

