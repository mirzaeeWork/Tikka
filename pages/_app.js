// pages/_app.js
import '../styles/globals.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { wrapper } from '../components/Redux/store';

const theme = createTheme();

function MyApp({ Component, pageProps }) {
    const { store } = wrapper.useWrappedStore(pageProps); 
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
