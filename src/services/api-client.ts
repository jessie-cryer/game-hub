import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0a5fa52a0d20400bbd63ae65e0ac1327'
    }
})
