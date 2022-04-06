import React from 'react'
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core/styles";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    //disable, ...
}
export const useStyles = makeStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,min,
        max,step
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value as [number, number])
    }
    const classes = useStyles()


    return (
        <>
            <Slider
                classes={classes}
                style={{width: '200px', padding: '10px'}}
                color={'primary'}
                onChange={onChangeCallback}
                min={min}
                max={max}
                step={step}
                value={value}
            />
        </>
    )
}

export default SuperDoubleRange
