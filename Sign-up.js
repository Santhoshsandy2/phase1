import styled from 'styled-components';
import React from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import 'react-tabs/style/react-tabs.css';


toast.configure();

const Input = styled.input`
width:100%;
padding: 12px 20px;
margin: 8px 0;
border-radius:4px;
box-sizing: border-box;
`

const Div = styled.div`

  padding-right:50px;
  padding-left:50px;
  padding-bottom:50px;
  padding-top:10px;
  align-items: center;
  border-radius:7px;
  background:#81b6eb;
  justify-content: center;
  box-shadow:0  19px 18px 0 #6e7273, 0 10px 30px 0 rgba(0, 0, 0, 0.19);
  
`
const Divout = styled.div`
display: flex;
align-items: center;
background-image: "url(/car.jpg)";
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;`

const Submitbutton = styled.input`
  width:310px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  margin-right:7px;
  font-weight:bold;
  font-size:16px;
  text-align:center;
  border: none;
  cursor: pointer;`;

  const Head1= styled.p`
  text-align:center;
  font-size:30px;
  font-weight:bold;
  color:#fff;
  `


  class Login extends React.Component
  {
    constructor(props) 
    {
      super(props);
      this.state = { 
            username:'', 
             email: '',
            password:''}
      this.state={isemail:''}
      this.changeusername = this.changeusername.bind(this);
      this.changeemail = this.changeemail.bind(this);
      this.changepassword = this.changepassword.bind(this); 
      this.Signup = this.Signup.bind(this); 
    }
changeusername(event) {
    this.setState({ username: event.target.value }) //getting the values and set the values
}
changeemail(event) {

  this.setState({ email: event.target.value })

 //getting the values and set the values
}
changepassword(event) {
  this.setState({ password: event.target.value }) //getting the values and set the values
}
Signup(event)
{
  event.preventDefault();

  var userform = document.forms["form"]["user"].value;
  var passform = document.forms["form"]["pass"].value;
  var email = document.forms["form"]["em"].value;

  let data = { username: this.state.username,email:this.state.email, password: this.state.password };

    if(userform ==="" ||email ==="" || passform ==="" )
    {
     
      toast.warn("Field is empty",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
    }
    else 
    {
      axios.post("http://localhost:8081/Rest/Sign?username="+data.username+"&email="+data.email+"&password="+data.password).then(res=>{
        console.log(res);
        if(res.status==200)
        {
          window.location.href="/";
        }
        else{
          toast.warn("something went wrong",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
        }

      }).catch(err=>{
        console.log(err);
        toast.warn("server error",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
      })
    }
    
}
    render()
    {
      return (
        <Divout>
         
          <Div>
           <Head1>Sign-up</Head1>
            <form id="form" method='post' onSubmit={this.Signup}>
              
                <Input type="text" placeholder="Username" name="username" id="user" maxLength="15" 
                value={this.state.username || ""} onChange={this.changeusername} required/><br/>
                
                <Input type="email" placeholder="E-mail" name="email" id="em"
               pattern=".+@gmail\.com"
                value={this.state.email || ""} onChange={this.changeemail}  required/><br/>

                <Input type="password" placeholder="password" name="password"  id="pass" maxLength="15"
                value={this.state.password ||""} onChange={this.changepassword} required/><br/>

                <Submitbutton type="submit" value="Create"/>

            </form>
            
          </Div>
        </Divout>
      );
   }
}

export default Login;
