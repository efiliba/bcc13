"use client"

// import { Grid, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { Header } from './Header';
// import { Footer } from './Footer';
import { AcknowledgementOfCountry } from './AcknowledgementOfCountry';

export const Layout = ({ children }) =>
  // <Grid container direction="row" justify="center" alignItems="center">
  <div>
    {/* <Header /> */}
    {children}
    <AcknowledgementOfCountry />
    {/* <Footer /> */}
  </div>
  // </Grid>

// export const Layout = ({ children }) => (
//   <ThemeProvider theme={theme}>
//     <Grid container direction="row" justify="center" alignItems="center">
//       {/* <Message message="Important Covid Message" /> */}
//       <Header />
//       {children}
//       <AcknowledgementOfCountry />
//       <Footer />
//     </Grid>
//   </ThemeProvider>
// );
