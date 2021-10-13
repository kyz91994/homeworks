import React from 'react'
import c from './Message.module.css'
type MessageType ={
    avatar:string,
    name:string,
    message: string,
    time: string
}
function Message(props:MessageType) {
    return (
        <div className={c.message}>
                <img className={c.avatar} src={props.avatar}/>
            <div className={c.triangle}/>
            <div className={c.container}>
                <div className={c.name}>{props.name}</div>
                <div className={c.text}>{props.message}</div>
                <div className={c.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
