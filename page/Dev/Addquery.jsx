import React from 'react'
import DevNav from '../../component/DevNav'

export default function Addquery() {
  return (
    <div>
        <DevNav/>
        <br/><br/><br/><br/>
      <div class="input-group mb-3">
  <button class="btn btn-outline-primary" type="button" id="button-addon1" data-mdb-ripple-color="dark">
    Button
  </button>
  <input
    type="text"
    class="form-control"
    placeholder=""
    aria-label="Example text with button addon"
    aria-describedby="button-addon1"
  />
</div>
    </div>
  )
}
