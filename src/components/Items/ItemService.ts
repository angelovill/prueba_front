import axios from 'axios';

const base_url = 'http://localhost:3001/api';

export const fetchItems = async () => {
    return await axios.get(`${base_url}/items`);
}

export const submitItem = async (name: String, description: String) => {
    return await axios.post(`${base_url}/items/create`, {
        name,
        description
    });
}

export const deleteItem = async (id: string) => {
    return await axios.post(`${base_url}/items/delete`, {
        id
    });
}
