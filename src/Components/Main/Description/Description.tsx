import {useParams} from 'react-router-dom';
import style from './description.module.scss';
import dataMock, { updateStorage } from '../../../dataMock';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function Description() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    let cardNumber = -1;
    const {id} = useParams()
    const columnNumber = dataMock.findIndex((column) => {
        cardNumber = column.issues.findIndex(item => item.id === id)
        return cardNumber === -1 ? false : true
    })

    const card = dataMock[columnNumber].issues[cardNumber]

    const [isChanging, setIsChanging] = useState(false)

    function clickHandler() {
        setIsChanging(true)
    }

    function btnHandler() {
        if (textareaRef.current && textareaRef.current.value) {
            dataMock[columnNumber].issues[cardNumber].description = textareaRef.current.value;
            updateStorage()
        }
        setIsChanging(false)
    }

    return (
        <div className={style.wrapper}>
            <Link to='/'><div className={style.cross}></div></Link>
            <h2 className={style.heading}>{card.name}</h2>
            {!isChanging && <p className={style.desc} onClick={clickHandler}>
                {card.description ? card.description : 'This task has no description (click to change)'}
            </p>}
            {isChanging && <textarea ref={textareaRef} className={style.textarea} autoFocus defaultValue={card.description}></textarea>}
            {isChanging && <button className={style.btn} onClick={btnHandler}>Save</button>}
        </div>
    )
}