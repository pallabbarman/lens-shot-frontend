'use client';

import store from '@/redux/app';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import AntdRegistry from '../AntdRegistry';

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            <AntdRegistry>{children}</AntdRegistry>
        </Provider>
    );
};

export default Providers;
