import { useState } from 'react';
import style from './user.module.scss'
import icon from './icon.svg'
import arrow from './arrow.svg'

export default function User() {
    const [show, setShow] = useState(false);
    function showMenu() {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return(
        <div className={style.userMenu}>
            <div onClick={showMenu} className={style.user}>
                <img src={icon} alt="icon" />
                <img src={arrow} className={show ? style.noRotate : style.rotate} alt="arrow" />
            </div>
            {show && <ul className={style.list}>
                <li className={style.listItem}><a className={style.listLink} href='#'>Profile</a></li>
                <li className={style.listItem}><a className={style.listLink} href='#'>Log Out</a></li>
            </ul>}
        </div>
    )
}

