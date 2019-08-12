import axios from 'axios'

const ApiUrl: String = 'https://lapx.herokuapp.com/'

export async function getData() {
    return await axios.get(ApiUrl + '/data')
        .then(response => {
            return response.data
        }).catch(error => {
            alert("Api is down.")
            console.log(error)
        })

}
