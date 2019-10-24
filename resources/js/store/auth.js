const state = {
    user: null
}
const getters = {
    check: state => !! state.user,
    username: state => state.user ? state.user.name : ''
}

const mutations = {
    setUser (state, user) {
        state.user = user
    }
}

const actions = {
    async register (context, data) {
        console.log('testtest');
        console.log(context);
        console.log(data);

        // console.log(axios);

        // console.log(axios.post());


        // const response = await axios.post()

        const response = await axios.post('/api/register', data)

        // const response = await axios.post('/api/register');

        // const response = await axios.post('/api/test');

        // console.log(response);

        // const response = await axios.post('/register', data);


        // const response = await axios.post('/api/register', data)
        context.commit('setUser', response.data)

        // context.commit('setUser', 'testtest')

    },

    async login (context, data) {
        const response = await axios.post('/api/login', data)
        context.commit('setUser', response.data)
    },

    async logout (context) {
        const response = await axios.post('/api/logout')
        context.commit('setUser', null)
    },

    async currentUser (context) {
        const response = await axios.get('/api/user')
        const user = response.data || null
        context.commit('setUser', user)
    },



}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}