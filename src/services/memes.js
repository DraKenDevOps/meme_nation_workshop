import axios from 'axios'

let api_url = 'https://meme-api.herokuapp.com/gimme'

export const call_memes = async(count) => 
    await axios.get(`${api_url}/${count}`)