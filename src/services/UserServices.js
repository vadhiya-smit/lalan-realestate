const USER_BASE_URL = "http://localhost:3000/api/users/"
const axios = require('axios')
class UserServices{
    static getUsers(){
        return axios.get(USER_BASE_URL)
    }

    static async signupUser(body){
        return axios.post(USER_BASE_URL+'signup',body)
    }

    static async sendOtp(body){
        return axios.post(USER_BASE_URL+'otp',body)
    }

    static loginUser(body){
        return axios.get(USER_BASE_URL+'login',body)
    }
}

export default UserServices