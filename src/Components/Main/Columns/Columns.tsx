import Column from './../Column/Column';
import style from './columns.module.scss';

export default function Columns() {
    return (
        <div className={style.wrapper}>
            <Column number={0}/>
            <Column number={1}/>
            <Column number={2}/>
            <Column number={3}/>
        </div>
    )
}