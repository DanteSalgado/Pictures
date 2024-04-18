import axios from 'axios'

const searchImage = async(term) => {
    const url = 'http://api.unsplash.com/seacrh/photos/?client_id=LvX9eVXUmAW-WqXcc22cnEb8gsDU7sJoyPaAiKDU2js'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    }
        )   
}

console.log(term) 
console.log(response.dat .results)

return response.data.results