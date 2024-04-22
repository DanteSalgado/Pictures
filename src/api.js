import axios from 'axios'

const SearchImage = async(term) => {
    const url = 'http://api.unsplash.com/seacrh/photos/?client_id=LvX9eVXUmAW-WqXcc22cnEb8gsDU7sJoyPaAiKDU2js'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response) 
    return response.data.results
}

export default SearchImage