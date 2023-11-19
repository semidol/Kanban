import dataMock, { id, updateStorage } from '../../../dataMock';
import { IColumnProps } from '../../../types';
import Card from '../Card/Card';
import style from './column.module.scss';
import plus from './plus.svg';
import { useRef, useState, useContext } from 'react';
import { DataContext } from '../../../App';



export default function Column({number}:IColumnProps) {
    const {data, setData} = useContext(DataContext)
    const selectRef = useRef<HTMLSelectElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listCard = data[number].issues.map((item, i) => <Card data={item} key={i}/>);
    const selectList = number ? data[number-1].issues.map((item, i) => <option value={item.id} key={i}>{item.name}</option>) : undefined;
    const [showInput, setShowInput] = useState(false);

    function selectHandler() {
        if (selectRef.current && dataMock[number-1].issues.length) {
            let id = selectRef.current.value;
            let index = dataMock[number-1].issues.findIndex(item => item.id === id)
            let newCard = dataMock[number-1].issues[index]
            dataMock[number].issues.push(newCard)
            dataMock[number-1].issues.splice(index, 1)
            setShowInput(false)
            if (setData) {
                setData([...dataMock])
                updateStorage()
            }
        }
    }

    const btnHandler = () => {
        if (showInput) {
            if (inputRef.current && inputRef.current.value) {
                dataMock[number].issues.push({id:`${id.id++}`, name: inputRef.current.value, description: ''})
            }
            setShowInput(false) 
        } else {
            setShowInput(true)
        }
        if (setData) {
            setData([...dataMock])
            updateStorage()
        }
    }

    return (
        <div className={style.column}>
            <h2 className={style.heading}>{dataMock[number].title}</h2>
            <div className={style.cards}>
                <div>
                    {listCard}
                </div>

                {showInput && !number && <input className={style.input} type="text" autoFocus ref={inputRef} />}

                <button 
                onClick={!number? btnHandler : (dataMock[number-1].issues.length ? btnHandler : undefined)} 
                className={
                    showInput ? 
                    (!number ? style.btnSubmit : style.btnNone) :
                    (number && !dataMock[number-1].issues.length ? style.btnDisabled : style.btnPlus)
                }>
                    {!showInput && <img src={plus} alt="plus" />}
                    {!showInput ? "Add card" : "Submit"}
                </button>

                {(number && showInput) ? <select className={style.select} autoFocus ref={selectRef} onChange={selectHandler}>
                        <option style={{display:'none'}}></option>
                        {selectList}
                    </select> : undefined}    
            </div> 
        </div>
    )
}