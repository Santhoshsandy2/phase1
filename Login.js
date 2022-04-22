import styled from 'styled-components';
import React from 'react';
import {toast} from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

toast.configure();

const Input = styled.input`
width:100%;
padding: 12px 20px;
margin: 8px 0;
border-radius:4px;
box-sizing: border-box;
`

const Inputeye = styled.input`
width:87%;
padding: 12px 20px;
margin: 8px 0;
border-radius:4px;
box-sizing: border-box;`

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
min-height: 100vh;
justify-content: center;`

const Submitbutton = styled.input`
  width:180px;
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
  const Forgot=styled.div`
    display:flex;
    pointer:cursor;
    justify-content:right;
  `

  const Show=styled.button`
      width:48px;
      height:42px;
      border-radius:3px;
  `
  

  class Login extends React.Component
  {
    
    constructor(props) 
    {
      super(props);
      this.state = { username: '', password: '' }
      this.state={show:true,password:''}
      this.changeusername = this.changeusername.bind(this);
      this.changepassword = this.changepassword.bind(this);
      this.login = this.login.bind(this);
      this.showtext = this.showtext.bind(this);
  }
  changeusername(event) {
      this.setState({ username: event.target.value }) //getting the values and set the values
  }
  changepassword(event) {
      this.setState({ password: event.target.value }) //getting the values and set the values
  }

  showtext(event)
  {
    event.preventDefault();
     this.setState(
       {
         show:!this.state.show 
       }
      ) 
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  login(event) 
  {
    event.preventDefault();

    var userform = document.forms["formlogin"]["user"].value;
    var passform = document.forms["formlogin"]["pass"].value;

    let data = { username: this.state.username, password: this.state.password };

    if(userform =="" || passform =="")
    {
      toast.warn("Field is empty",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
    }
    else{
      axios.post("http://localhost:8081/Rest/Login?username="+data.username+"&pass="+data.password).then(res=>{
        
        if(res.status==200)
        {
          toast.warn("successfully login",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
        }
        else{
          toast.warn("something went wrong",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
        }

      }).catch(err=>{
       
        toast.warn("server error",{position: toast.POSITION.TOP_CENTER,toastId: 'success1'});
      })
    }
    
  }
    render()
    {
      return (
        <Divout>
          <Div>
            <Head1>Login or Sign-up</Head1>
            <form id="formlogin">
                <Input type="text" placeholder='Username' name='username' 
                value={this.state.username} onChange={this.changeusername} id="user" required/><br/>

               <Inputeye type={this.state.show ? 'password':'text' } placeholder='Password' name='pass'id="password"
                   value={this.state.password} onChange={this.changepassword}  required/>

                   <Show onClick={this.showtext}>
                    {this.state.show?"show":"hide"}
                   </Show>
               
                <Forgot>
                <Link to="/forgot">
                    <a href="">forgot password?</a> <br/>
                    </Link>
                 </Forgot>
                <Submitbutton type="submit" value="Login" onClick={this.login} />
              
                <Link to="/signup">
                    <Submitbutton  type="submit" value="Sign-up"/>
                </Link>
            </form>
          </Div>
        </Divout>
      );
   }
}
export default Login;
