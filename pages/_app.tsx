import '../styles/globals.scss';
import { Provider } from 'react-redux';

import { store } from '../src/store/store';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
};

export default MyApp;
