// import * as React from 'react';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
// import ContentCut from '@mui/icons-material/ContentCut';
// import ContentCopy from '@mui/icons-material/ContentCopy';
// import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';

// export default function IconMenu() {
//   return (
//     <Paper sx={{ width: 100, maxWidth: '100%' }}>
//       <MenuList>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentCut fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Cut</ListItemText>
//           <Typography variant="body2" color="text.secondary">
//             ⌘X
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentCopy fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Copy</ListItemText>
//           <Typography variant="body2" color="text.secondary">
//             ⌘C
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentPaste fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Paste</ListItemText>
//           <Typography variant="body2" color="text.secondary">
//             ⌘V
//           </Typography>
//         </MenuItem>
//         <Divider />
//         <MenuItem>
//           <ListItemIcon>
//             <Cloud fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Web Clipboard</ListItemText>
//         </MenuItem>
//       </MenuList>
//     </Paper>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useHistory } from "react-router-dom";

export default function BasicList() {
  let history=useHistory()
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
           
            
              <ListItemText primary={JSON.parse(localStorage.getItem("user")).email} />
    
          </ListItem>
        
         
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
              localStorage.clear()
              history.push("/")
            }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
           
        </List>
      </nav>
    </Box>
  );
}

