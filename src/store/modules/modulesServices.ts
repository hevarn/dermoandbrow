import {Commit} from "vuex"
import Services from "../../model/Services";
import Data from "./service"

interface servicesState {
    services: Services[],
    totalItems: number,
    loading: boolean | null,
    status: string | null
}

const state: servicesState = {
    services: [],
    totalItems: 0,
    loading: false,
    status: null,
}

const actions = {
    loadServices({commit}: {commit: Commit}, data: Data ){
        commit('START_LOADING')
        console.log(data)
        commit('SET_SERVICE', data["services"].map((item: any)=> {new Services(item)}))
    }
}

const mutations = {
    SET_SERVICE: (state: servicesState, value: Services[]) => {
        state.services = value
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};