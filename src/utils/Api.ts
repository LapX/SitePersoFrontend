import axios from 'axios'

const ApiUrl: String = 'https://lapx.herokuapp.com'

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

export async function addGraphs(token: string, amount: number) {
    console.dir(token)
    console.dir(amount)
    return await axios.post(ApiUrl + '/addGraphs',
        {
            token: token,
            amount: amount
        }, {
            headers: {
                'Content-Type': 'text/plain'
            }
        }).catch(error => {
        alert("Api is down.")
        console.log(error)
    })
}

