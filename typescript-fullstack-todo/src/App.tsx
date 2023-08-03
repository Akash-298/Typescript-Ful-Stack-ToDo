import { customTheme } from './theme/customTheme';

import React,{FC,ReactElement} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Dashboard } from './pages/dashboard/dashboard';
const App:FC = ():ReactElement =>{
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
      <Dashboard />
      </CssBaseline>
       {/* <h1>Hello world</h1> */}
    </ThemeProvider>
 
)}
export default App;
