import React from 'react'
import DevNav from '../../component/DevNav'

export default function AddDetails() {
  return (<div>
<DevNav/>
<br/><br/><br/><br/>
 
   < form >
            <div className="container">
                <h1>Add details</h1>
                <div className='patform'>
                <div className="row">
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required/>    
                </div><br></br>    
                <div className="row">
                    <label><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" required/>
                </div><br></br>
                <div className="row">
                    <label><b>Mobile</b></label>
                    <input type="number" placeholder="Enter Phonenumber" name="mobile" required/>
                </div>
                
                <div className='row'>
                    <a href="/Home"><button type="submit" class="m-3"   >submit</button></a><br></br>
                </div>
                
                </div>
                </div>
                </form>
                </div>
  )
}
