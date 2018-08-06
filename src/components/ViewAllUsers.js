

import React, { Component } from 'react'
class ViewAllUsers extends Component{
   
    render(){
        const users = this.props.allUsers
        
        return(
            <div>
             {users}
                </div>
        )
    }
}
  
export default ViewAllUsers