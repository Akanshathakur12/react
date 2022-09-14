import React, { useEffect } from 'react'
import DevNav from '../../component/DevNav'
import { Button } from '@mui/material'
import {ToastContainer,toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams} from 'react-router-dom';
import developerService from '../../Service/developer.service';
import { useState } from 'react';



export default function UpdateDetails() {
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[skill, setSkill] = useState('');
    const {devId} = useParams();

    useEffect( () =>{
        if(devId){
            developerService.getDevById(devId)
            .then(response => {
                setName(response.data.name);
                setEmail(response.data.email);
                setSkill(response.data.skill);
            })
        }
        
    },[] )

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
                    <input type="text" name="name" required 
                        value={name}
                        onChange= {(e) => setName(e.target.value)}
                        />    
                </div><br></br>    
                <div className="row">
                    <label><b>Email</b></label>
                    <input type="email" name="email" required
                        value={email}
                        onChange= {(e) => setEmail(e.target.value)}
                        />
                </div><br></br>
                <div className="row">
                    <label><b>Skill Level</b></label>
                    <input type="text" name="skill level" required
                        value={skill}
                        onChange= {(e) => setSkill(e.target.value)}
                        />
                </div>
                {/* <div className="row">
                    <label><b>User Id</b></label>
                    <input type="number" placeholder="Enter User Id" name="User Id" required
                        />
                </div> */}
                <br/>
               
                    <Button  variant="contained"  >submit</Button><br></br>
                    <Button onClick={useEffect}>Get Id</Button>
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


