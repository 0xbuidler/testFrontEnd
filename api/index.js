import axios from '~/plugins/api'
 console.log(axios.api)
export default {
    getTest(){
        // console.log(res)
        return axios.get('user.json')
    }
}