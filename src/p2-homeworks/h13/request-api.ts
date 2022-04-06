import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})
// type RequestType = {
//     errorText:string,
//     info: string,
//     yourBody:{success:boolean},
//     yourQuery:{}
// }
// api
export const requestsAPI = {
    postRequest(success: boolean) {
        return instance.post<{ success: boolean }, AxiosResponse>('', {success});
    },

}



