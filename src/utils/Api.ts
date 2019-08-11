import axios from 'axios'

const ApiUrl: String = 'http://localhost:8080'

export interface Datalist {
    ID: number,
    Tuples: Item[]
}

export interface Item {
    Quarter: number,
    Earnings: number
}

export async function getData() {
    return await axios.get(ApiUrl + '/data')
        .then(response => {
            return response.data
        }).catch(error => {
            alert("Api is down.")
            console.log(error)
        })

}