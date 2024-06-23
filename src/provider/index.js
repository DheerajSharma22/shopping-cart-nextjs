'use client'

import Header from "@/components/header";
import store from "@/store/store"
import { Provider } from "react-redux"

export default function ReduxProvider({ children, getSession }) {
    return <Provider store={store}>
        <Header getSession={getSession} />
        {children}
    </Provider>;
}