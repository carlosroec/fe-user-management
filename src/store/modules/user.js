import userDataStore from "../../api/user";

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
        userDataStore.getUsers()
            .then(users =>  {
                console.log("AAA", users);
                commit("SET_USERS", { users });
            })
    }
}

export default {
    state,
    mutations,
    actions
}
