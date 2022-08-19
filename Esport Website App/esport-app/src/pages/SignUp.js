
import '../App.css';
import './SignUp.css';
import image from '../images/rednation.jpg';
import { Component} from 'react';
import UserService from 'C:/Users/Marek PC/Desktop/Red Nation Project/Esport-App-Front-End/Esport Website App/esport-app/src/services/UserServices.js';




class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email:'',
      password:'',
      passwordConfirm:''
    }
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changePasswordConfirmHandler = this.changePasswordConfirmHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    if(this.state.id === '_add'){
      return
  }else{
  
    UserService.getUserByUsername(this.state.username).then((res) => {
      let user = res.data;
      this.setState({email: user.email,
      password: user.password
    });
    });
}
}

handleSubmit= (e) => {
  e.preventDefault();
  let user = {username: this.state.username, email: this.state.email, password: this.state.password};
  console.log('user => ' + JSON.stringify(user));
  UserService.createUser(user).then(res =>{
    this.props.history.push('/users');
  });
  window.location.reload();
}

saveOrUpdateUser = (e) => {
  e.preventDefault();
  let user = {username: this.state.username, email: this.state.email, password: this.state.password};
  console.log('user => ' + JSON.stringify(user));

  // step 5
  if(this.state.username === '_add'){
      UserService.createUser(user).then(res =>{
          this.props.history.push('/users');
      });
  }else{
      UserService.updateUser(user, this.state.username).then( res => {
          this.props.history.push('/users');
      });
  }
}



changeUsernameHandler= (event) => {
  this.setState({username: event.target.value});
}

changeEmailHandler= (event) => {
  this.setState({email: event.target.value});
}

changePasswordHandler= (event) => {
  this.setState({password: event.target.value});
}
changePasswordConfirmHandler= (event) => {
  this.setState({passwordConfirm: event.target.value});
}

cancel(){
  this.props.history.push('/users');
}
  
render() {



  return (

    
    <div className="body">
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label className='label' htmlFor="chk" aria-hidden="true">Sign up</label>
          <img className='signupimg'src={image} alt='Logo' />
					<input onChange={this.changeUsernameHandler} className='input'type="text" name="user" value={this.state.username || ""}placeholder="User name" required=""/>
					<input onChange={this.changeEmailHandler}className='input'type="email" name="email" value={this.state.email || ""} placeholder="Email" required=""/>
					<input onChange={this.changePasswordHandler} className='input' type="password" name="pswd" value={this.state.password || ""} placeholder="Password" required=""/>
          <input onChange={this.changePasswordConfirmHandler} className='input' type="password" name="pswdconfirm" value={this.state.passwordConfirm || ""} placeholder="Confirm Password" required=""/>
					<button className='button' onClick ={this.handleSubmit} type="submit">Sign Up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label className='label'htmlFor="chk" aria-hidden="true">Login</label>
					<input className='input' type="text" name="user" placeholder="Username" required=""/>
					<input className='input' type="password" name="pswd" placeholder="Password" required=""/>
					<button className='button'>Login</button>
				</form>
			</div>
	</div>
  </div>
  );
}
}

export default Signup;
