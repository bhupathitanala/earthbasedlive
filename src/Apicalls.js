import axios from "axios";
// import { useCart } from './stores/context/CartContext';

// // PROD
 export const base_url = '/api/';
 export const post_url = '/'

 // export const base_url = 'http://3.7.47.11:3001/api/';
 // export const post_url = 'http://3.7.47.11:3001/'

// LOCAL
//export const base_url = 'http://3.7.47.11/api/';
//export const post_url = 'http://3.7.47.11/'

export const jwtToken = localStorage.getItem('jwtToken');

export default {

    get(url, params = {}, extraConfigs = {}) {
        return axios({
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            url: base_url + url,
            params,
            ...extraConfigs,
        })
    },

    post(path, data = {}) {
        return axios({
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            url: base_url + path,
            data,
        })
    },

    postFormData(path, data) {
        var requestOptions = {
            method: 'POST',
            'Content-Type': 'multipart/form-data',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: data,
        }

        return fetch(`${base_url}/${path}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                return data;
            })
    },

    put(path, data) {
        return axios({
            method: "put",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            url: base_url + path,
            data,
        })
    },

    putFormData(path, data) {
        var requestOptions = {
            method: 'PUT',
            'Content-Type': 'multipart/form-data',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: data,
        }

        return fetch(`${base_url}/${path}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                return data;
            })
    },

    delete(path, data = {}) {
        return axios({
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            url: base_url + path,
            data,
        })
    }
}
