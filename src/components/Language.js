// import * as React from 'react';
// import TablePagination from '@mui/material/TablePagination';
// import Autocomplete from '@mui/material/Autocomplete';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// import * as locales from '@mui/material/locale';
// import Button from '@mui/material/Button';
// import MuiBreadcrumb from "@mui/material/Breadcrumbs"

// export default function Locales() {
//   const [locale, setLocale] = React.useState('zhCN');

//   const theme = useTheme();

//   const themeWithLocale = React.useMemo(
//     () => createTheme(theme, locales[locale]),
//     [locale, theme],
//   );

//   console.log("language ",themeWithLocale)

//   return (
//     <Box sx={{ width: '100%' }}>
//       <ThemeProvider theme={themeWithLocale}>
//         <Autocomplete
//           options={Object.keys(locales)}
//           getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
//           style={{ width: 300 }}
//           value={locale}
//           disableClearable
//           onChange={(event, newValue) => {
//             setLocale(newValue);
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="Locale" fullWidth />
//           )}
//         />
        
//         <TablePagination
//           count={2000}
//           rowsPerPage={10}
//           page={1}
//           component="div"
//           onPageChange={() => {}}
//         />
//       </ThemeProvider>

//       <MuiBreadcrumb/>
//     </Box>
//   );
// }



import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import * as locales from '@mui/material/locale';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}
