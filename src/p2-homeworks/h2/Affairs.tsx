import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id:number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    const onAll = style.filter + ' ' + (props.filter==='all'?  style.active : '')
    const onHigh = style.filter + ' ' + (props.filter==='high'?  style.active : '')
    const onMiddle = style.filter + ' ' + (props.filter==='middle'?  style.active : '')
    const onLow = style.filter + ' ' + (props.filter==='low'?  style.active : '')

    return (
        <div className={style.affairs}>
                {mappedAffairs}
            <SuperButton  onClick={setAll} className={onAll} value={'all'}>All</SuperButton>
            <SuperButton  onClick={setHigh} className={onHigh} value={'high'}>High</SuperButton>
            <SuperButton  onClick={setMiddle} className={onMiddle} value={'middle'}>Middle</SuperButton>
            <SuperButton  onClick={setLow} className={onLow} value={'low'}>Low</SuperButton>
        </div>
    )
}

export default Affairs
