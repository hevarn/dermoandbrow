// import { Commit, MutationTree, ActionTree } from "vuex"
// import GoogleReviews from "../../model/GoogleReviews";
// import axios from "axios";
//
// interface googleReviewsState {
//     reviews: GoogleReviews[],
//     totalItems: number,
//     loading: boolean,
// }
//
// const state = (): googleReviewsState => ({
//     reviews: [],
//     totalItems: 0,
//     loading: false,
// })
//
// const actions: ActionTree<googleReviewsState, googleReviewsState> = {
//     async loadReviews({commit}: { commit:Commit }) {
//         commit('START_LOADING')
//         return await axios.get('https://mybusiness.googleapis.com/v4/accounts/106441945824711998364/locations/ChIJxUhA4R7ZVA0RkrAJtZbiEtQ/reviews ')
//             .then((r)=>{
//                 const data = r.data
//                 console.log(data)
//             })
//     }
//
// }
//
// const mutations : MutationTree<googleReviewsState> = {
//     SET_REVIEWS: (state: googleReviewsState, value: GoogleReviews[]) => {
//         state.reviews = value
//     },
//     START_LOADING: (state: googleReviewsState) => {
//         state.loading = true
//     },
//     END_LOADING: (state: googleReviewsState) => {
//         state.loading = false
//     },
// }
//
// export default {
//     namespaced: true,
//     state,
//     actions,
//     mutations,
// }