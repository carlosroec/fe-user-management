import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// const root = process.env.API_DATA_ROOT;
const root = 'http://localhost:3000/api';

export default {
    getUsers() {
        return Vue.http
            .post(`${root}/users/filter`, {"filter": {}})
            .then(response => Promise.resolve(response.data));
    }
}