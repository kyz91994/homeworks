import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<[number,number]>([1,100])
    const onChangeRange = (value: number) => {
        setValue1(value)
        setValue2([value, value2[1]])
    }
    const onChangeDoubleRange = (value: [number, number]) => {
        setValue1(value[0])

        setValue2(value)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{marginRight: '15px'}}>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span style={{marginRight: '15px'}}>{value1}</span>
                <SuperDoubleRange

                    onChangeRange={onChangeDoubleRange}
                    value={value2}
                    min={0}
                    max={100}
                    step={1}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span style={{marginLeft:'15px'}}>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
