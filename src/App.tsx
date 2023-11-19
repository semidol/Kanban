import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import dataMock from './dataMock';
import { useState,createContext } from 'react';
import { IContext } from './types';

let initialValue:IContext = {
    data: dataMock,
    setData: null
}

export const DataContext = createContext(initialValue)

export default function App() {
    const [data, setData] = useState(dataMock)
    const value = {data, setData}

    return (
        <DataContext.Provider value={value}>
            <Header />
            <Main />
            <Footer />
        </DataContext.Provider>   
    )
}