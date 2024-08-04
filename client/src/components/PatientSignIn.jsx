import React, { useState } from 'react';
import { addPatient } from '../services/api';
import { useNavigate } from 'react-router-dom';
import'./PatientSignIn.css'

const PatientSignIn = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [severity, setSeverity] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === 'admin' && code === 'adm') {
            navigate('/admin');
            return;
        }

        await addPatient({ name, code, severity });
        setName('');
        setCode('');
        setSeverity(1);
        navigate('/view',{state: { name, code }});
    };

    return (
        <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={handleSubmit} >
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type='Text' class="login__input" onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input value={code} class="login__input" onChange={(e) => setCode(e.target.value)} placeholder="Code" required  
                    />
				</div>
                <div class="login__field">
					<i class="login__icon fa fa-exclamation-triangle"></i>
					<input type="number" class="login__input" value={severity} onChange={(e) => setSeverity(e.target.value)} min="1" max="10" required
                     />
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">	
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    );
};

export default PatientSignIn;
