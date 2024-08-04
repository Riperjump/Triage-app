import './HomeView.css'

const PatientSignIn = () => {
    return (
        <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" method='POST' >
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Username"  
                     />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input" placeholder="3 Letters Code"  
                    />
				</div>
                <div class="login__field">
					<i class="login__icon fa fa-exclamation-triangle"></i>
					<input type="number" class="login__input" placeholder="Severity" min={1} required max={7}
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
