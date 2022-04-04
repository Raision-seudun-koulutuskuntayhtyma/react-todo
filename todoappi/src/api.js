import axios from 'axios';

export function kirjaudu(kayttaja, salasana) {
    return axios.post("http://127.0.0.1:8000/auth/token/login", {
        username: kayttaja,
        password: salasana
    }).then((result) => {
        const token = result.data.auth_token;
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    });
}

export function haeTehtavat() {
    return axios.get(`http://127.0.0.1:8000/api/tehtavat/`);
}

export function merkitseTehdyksi(id) {
    return axios.patch(`http://127.0.0.1:8000/api/tehtavat/${id}/`, {
        tehty: true
    });
}
