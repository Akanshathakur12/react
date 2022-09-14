import React from 'react'
import DevNav from '../../component/DevNav'
import { Button } from '@mui/material'
import {ToastContainer,toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
import developerService from '../../Service/developer.service';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';



const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


export default function AddDetails() {
    const navigate = useNavigate()
    
    // const handleClick = async event => {
    //     toast("Saving Data");  
    //     await delay(4000);
    //    navigate('/dashboard');
    // };

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[skill, setSkill] = useState('');
    const[userId, setUserId] = useState('');

    useEffect(() => {
        console.log(localStorage.getItem('userId'));
        const id = localStorage.getItem('userId');
        console.log(id);
        setUserId(id);
    })
    

    const saveDetails = (e) => {
        e.preventDefault();

        const details = {name, email, skill, userId};
        console.log(JSON.stringify(details));
        developerService.addDetails(details)
        .then(response => {
            console.log("details added", response.data);
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `Details added Successful.`,
                showConfirmButton: false,
                timer: 3000
            });
            // navigate('/dashboard');
        })
        .catch( error => {
            console.log("error", error);
        })
    }




  return (<>
  <div>
<DevNav/>
<br/><br/><br/><br/>
 
   < form >
            <div className="container">
                <h1>Add details</h1>
                <div className='patform'>
                <div className="row">
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>    
                </div><br></br>    
                <div className="row">
                    <label><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" required
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                </div><br></br>
                <div className="row">
                    <label><b>Skill Level</b></label>
                    <input type="text" placeholder="Enter Skill level" name="skill level" required
                        value={skill} 
                        onChange={(e) => setSkill(e.target.value)}/>
                </div>
                <div className="row">
                    <label><b>User Id</b></label>
                    <input type="number" placeholder="Enter User Id" name="User Id"
                    disabled
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)}/>
                </div>
                <br/>
               
                    <Button  variant="contained" onClick={saveDetails} >submit</Button><br></br>
                    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
                
                </div>
                </div>
                </form>
             
                </div>
              

                 </>
  )
}


