import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./request-api";

export const Request = () => {
    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false)
    const postRequestHandler = () => {
        requestsAPI.postRequest(checkBoxValue)
            .then(res => console.log(res.data.info))
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }
    return (
        <div style={{display: 'flex', justifyContent: "flex-start"}}>
            <SuperButton onClick={postRequestHandler} >
                Click me
            </SuperButton>
            <SuperCheckbox checked={checkBoxValue} onChange={(e) => {
                setCheckBoxValue(e.currentTarget.checked)
            }}/>
        </div>
    )
}
