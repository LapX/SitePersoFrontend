import axios from 'axios'

//const ApiUrl: String = 'https://lapx.herokuapp.com/'
const ApiUrl: String = 'http://localhost:8080/'

export async function getData() {
    return await axios.get(ApiUrl + '/data')
        .then(response => {
            return response.data
        }).catch(error => {
            alert("Api is down.")
            console.log(error)
        })
}

export async function getGraphsData(token: string) {
    return await axios.get(ApiUrl + '/dataGraphs?token=' + token)
        .then(response => {
            return response.data
        }).catch(error => {
            alert("Api is down.")
            console.log(error)
        })
}

export async function getUser(token: string) {
    return await axios.get(ApiUrl + '/auth?token=' + token).then(response => {
        return response.data
    }).catch(error => {
        alert("Api is down.")
        console.log(error)
    })
}
