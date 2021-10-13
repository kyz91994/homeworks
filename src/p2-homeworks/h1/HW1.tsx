import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg',
    name: 'Виктор Борисович',
    message: 'Домашку сделал?',
    time: '20:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
