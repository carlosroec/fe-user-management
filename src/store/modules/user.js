import userDataStore from "../../api/user";
import { _ } from "core-js";

const state = {
    users: []
}

const mutations = {
    SET_USERS(_state, { users }) {
        _state.users = users;
    }
}

const actions = {
    getUsers({ commit }) {
        return userDataStore.getUsers()
            .then(users =>  {
                commit("SET_USERS", { users });
                return users;
            })
    }
}

const getters = {
    users: _state => _state.users
}

export default {
    state,
    mutations,
    actions,
    getters
}
