import User from './User/User';
import style from './header.module.scss';

export default function Header() {

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                    <h1 className={style.logo}>Awesome Kanban Board</h1>
                    <User />
                </div>
            </div>
        </header>
    )
}