
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

/*  componentDidMount(){

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
}*/

handleSubmit= (e) => {
  e.preventDefault();
  let user = {username: this.state.username, email: this.state.email, password: this.state.password};
  console.log('user => ' + JSON.stringify(user));
  UserService.createUser(user).then(res =>{
    this.props.history.push('/users');
  });
  //window.location.reload();
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

    


      <section className="vh-100 bg-image">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                          <div className="card">
                              <div className="card-body p-5">
                                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                  <form>

                                      <div className="form-outline mb-4">
                                          <input type="text"
                                                 className="form-control form-control-lg input"
                                                 onChange={this.changeUsernameHandler}
                                                 name="email"
                                                 value={this.state.username || ""}
                                                 placeholder="Username"/>
                                          <label className="form-label" htmlFor="form3Example1cg">Username</label>
                                      </div>

                                      <div className="form-outline mb-4">
                                          <input type="email"
                                                 className="form-control form-control-lg"
                                                 onChange={this.changeEmailHandler}
                                                 name="email"
                                                 value={this.state.email || ""}
                                                 placeholder="Email"/>
                                          <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                      </div>

                                      <div className="form-outline mb-4">
                                          <input type="password"
                                                 className="form-control form-control-lg"
                                                 onChange={this.changePasswordHandler}
                                                 name="pswd"
                                                 value={this.state.password || ""}
                                                 placeholder="Password"/>
                                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                      </div>

                                      <div className="form-outline mb-4">
                                          <input type="password"
                                                 className="form-control form-control-lg"
                                                 onChange={this.changePasswordConfirmHandler}
                                                 name="pswdconfirm"
                                                 value={this.state.passwordConfirm || ""}
                                                 placeholder="Confirm Password"/>
                                          <label className="form-label" htmlFor="form3Example4cdg">Confirm Password</label>
                                      </div>

                                      <div className="form-check d-flex justify-content-center mb-5">
                                          <input className="form-check-input me-2" type="checkbox" value=""
                                                 id="form2Example3cg"/>
                                          <label className="form-check-label" htmlFor="form2Example3g">
                                              I agree all statements in <a href="#!" className="text-body"><u>Terms of
                                              service</u></a>
                                          </label>
                                      </div>

                                      <div className="d-flex justify-content-center">
                                          <button type="button submit"
                                                  onClick ={this.handleSubmit}
                                                  className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-body">Register
                                          </button>
                                      </div>

                                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a
                                          href="/login"
                                          className="fw-bold text-body"><u>Login here</u></a></p>

                                  </form>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
}

export default Signup;
