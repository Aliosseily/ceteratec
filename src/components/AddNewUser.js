import React from 'react'

import '../AddNewUser.css'

class AddNewUser extends React.Component {
    
       
        onFormSubmit = (evt) => {
            evt.preventDefault();
            const form = evt.target;
            const name = form.name.value;
            const email = form.email.value;
            const gender = form.gender.value;           
        
            this.props.add(name, email, gender)
          
            }
    
        

     render(){
         console.log(this.props.users)
        
         return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                       <label htmlFor="fullname">Fullname</label><br/>
                       <input type = 'text' className = 'txtName' placeholder = 'Full name' name = 'name'/>
                       <br/><br/>
                       <label htmlFor="email"  >Email</label><br/>
                       <input type = 'text' className = 'txtEmail' placeholder = 'Email' name = 'email'/>
                       <br/><br/>
                    
                       <label htmlFor="gender"  >Gender</label><br/>
                       <select name = 'gender'className='dropdown'>
                       <option value="male">male</option>
                       <option value="female">female</option>
                       </select> 
                       <br/><br/>
                       <button className='btnSave' >Save</button>
                 </form>
            </div>
         )
     }
}

export default AddNewUser 