import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
 
} from 'mdb-react-ui-kit';
import HomeNav from '../../component/HomeNav';

export default function LoginPage() {
  return (<>
  <HomeNav/>
  <br/><br/><br/><br/><br/>
  <div class="offset-2 col-8">
    <form class="">
        <p>Email</p>
      <MDBInput className='mb-4' type='email' id='form2Example1' />
      <p>Password</p>
      <MDBInput className='mb-4' type='password' id='form2Example2'  />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className='mb-2' block>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='/register'>Register</a>
        </p>
          

        
      </div>
    </form>
    </div>
    </>
  );
}