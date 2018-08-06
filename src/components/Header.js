import React , {Component} from 'react'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import AddNewUser from './AddNewUser'
  import ViewAllUsers from './ViewAllUsers'
  import '../AddNewUser.css'
  

class Header extends Component{
  constructor(props) {
    super(props);
    const users = [
        {name:'ali' , email:'ali.ossaily@outlook.com', gender:'male' },
        
      ]
      this.state={
        users
    }
    this.AddNewUser = this.AddNewUser.bind(this);
    
    }
    
      AddNewUser(name,email,gender){
      const userInfo = { name,email,gender }
      const user = this.state.users;
      user.push(userInfo);
      this.setState({ person: user })
      console.log('new user added successfully')
      alert("new user added successfully")
     
      
      }
 render(){
 const a =         
  this.state.users.map((user,i)=>
 <div>
    {user.name} {user.email} {user.gender}
     </div>
 )
 return(
<div>
     
     
      <HashRouter>
        <div>
        
          <ul className="header">
          <h1>This is me</h1>
          <NavLink to="/addNewUser"><button className='btn' style = {{backgroundColor:'green'}} >Add New User</button></NavLink>
          <NavLink to="/viewAllUsers"><button className='btn'style = {{backgroundColor:'red'}}>View All Users</button> </NavLink>

          </ul>
          <div className="content">
            
            <Route path="/viewAllUsers"  render={() => <ViewAllUsers allUsers={a} />}/>
            <Route path="/addNewUser"  render={() => <AddNewUser  add={this.AddNewUser} users={this.state.users} />}/>
           
          </div>
        </div>
      </HashRouter>
    </div>
   )
 }

}
export default Header 