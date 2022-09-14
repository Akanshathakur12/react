import React from 'react'
import DevNav from '../../component/DevNav'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import CancelScheduleSendOutlinedIcon from '@mui/icons-material/CancelScheduleSendOutlined';
import ShareIcon from '@mui/icons-material/Share';

export default function Addquery() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
        <DevNav/>
        <br/><br/><br/><br/>
      {/* <div className="input-group mb-3">
  <button className="btn btn-outline-primary" type="button" id="button-addon1" data-mdb-ripple-color="dark">
    Button
  </button>
  <input
    type="text"
    className="form-control"
    placeholder=""
    aria-label="Example text with button addon"
    aria-describedby="button-addon1"
  />
</div> */}
<Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
<div className="col-4">
<div className="form-outline mb-4">
  Topic 
  <input type="text" id="form7Example1" className="form-control" />
  <label className="form-label" for="form7Example1"></label>
</div>

Query
<div className="form-outline mb-4">
  <input type="email" id="form7Example2" className="form-control" />
  <label className="form-label" for="form7Example2"></label>
  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
</div>
</div>

</Box>
<BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recent Querys" href='/dashboard' icon={<RestoreIcon />} />
  <BottomNavigationAction label="Add to Fav" href='/Addquery' icon={<CancelScheduleSendOutlinedIcon />} />
  <BottomNavigationAction label="Share" href='https://login.yahoo.com/?.intl=us' icon={<ShareIcon />} />
</BottomNavigation>
    </div>

  )
}
