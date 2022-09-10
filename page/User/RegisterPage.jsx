import React from 'react'
import HomeNav from '../../component/HomeNav'


export default function RegisterPage() {
  return (<>
  <HomeNav/>
  <br/><br/><br/><br/>
  <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTeMJExzbmLw36-PRSfhuL8DSIMqpzV2ABA&usqp=CAU")',
      height: "1000px",width: "100%" , backgroundRepeat: "no-repeat"
    }}>
  
  <div  class="container col-sm-12">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <br/>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br/>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Developer
  </label>
</div>
<br/>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Admin
  </label>
  <br/><br/>
</div>
  <button type="submit" class="btn btn-primary" href="/login">Submit</button>
</form>
</div>
</div>
    </>
  )
}
