import { ICardProps } from '../../../types'
import style from './card.module.scss'
import {Link} from 'react-router-dom'

export default function Card({data}:ICardProps) {
    return (
        <Link to={data.id} className={style.card}>
                {data.name}
        </Link>
    )
}