import style from './footer.module.scss';
import {useContext} from 'react';
import { DataContext } from '../../App';

export default function Footer() {
    const name = 'Bro'
    const year = '2000'
    const {data} = useContext(DataContext)

    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapper}>
                    <ul className={style.statusList}>
                        <li className={style.status}>Active tasks: {data[0].issues.length}</li>
                        <li className={style.status}>Finished tasks: {data[3].issues.length}</li>
                    </ul>
                    <div className={style.nameYear}>Kanban board by {name}, {year}</div>
                </div>
            </div>
        </footer>
    )
}