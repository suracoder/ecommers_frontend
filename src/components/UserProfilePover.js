import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ProfileMenu from "./ProfileMenu"
export default function PopoverPopupState() {

    console.log("user profile ",JSON.parse(localStorage.getItem("user")).name)

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
        
          {/* <IconButton {...bindTrigger(popupState)}>  <Avatar alt="Remy Sharp" src="https://picsum.photos/200" /></IconButton> */}
          <Button   {...bindTrigger(popupState)} variant="outlined"   size='small' startIcon={  <Avatar alt="Remy Sharp" src={JSON.parse(localStorage.getItem("user")).imageUrl}/>}>
  {JSON.parse(localStorage.getItem("user")).givenName}
</Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
        <ProfileMenu/>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
