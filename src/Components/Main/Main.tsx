import style from './main.module.scss';
import Columns from './Columns/Columns';
import { Route, Routes } from 'react-router-dom';
import Description from './Description/Description';

export default function Main() {
    return (
        <main className={style.main}>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Columns />}/>
                    <Route path='/:id' element={<Description />}/>
                </Routes>
            </div>
        </main>
    )
}