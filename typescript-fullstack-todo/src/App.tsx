import { customTheme } from './theme/customTheme';

import React,{FC,ReactElement} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
const App:FC = ():ReactElement =>{
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline></CssBaseline>
       <h1>Hello world</h1>
    </ThemeProvider>
 
)}
export default App;
