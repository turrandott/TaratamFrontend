import axios from 'axios';

export async function createWish(wish, email){
    const data = await axios.post('http://localhost:3001/wishes/create', {wish, email});
    console.log(data);
}

export async function createUser(email, password){
    const data = await axios.post('http://localhost:3001/users/create', {email, password});
    console.log(data);
}
