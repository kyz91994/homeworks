import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}
type RangeSliderPropsType = {
    value: number[]
    setValue: (newValue: number[]) => void
}

export  function RangeSlider({value, setValue} : RangeSliderPropsType) {
    const classes = useStyles();
    // const [value, setValue] = React.useState<number[]>([value1, value2]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>

            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}