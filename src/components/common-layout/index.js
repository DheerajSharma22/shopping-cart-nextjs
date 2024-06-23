import ReduxProvider from '@/provider'
import React from 'react'
import { auth } from '../../../auth';

const CommonLayout = async ({ children }) => {
    const getSession = await auth();

    return (
        <ReduxProvider getSession={getSession}>
            
            {children}
        </ReduxProvider>
    )
}

export default CommonLayout
