import axiosClient from "/src/axiosClient.js";

export default function searchMeals({commit},keyword){
    axiosClient.get(`search.php?s=${keyword.value}`)
    .then(({data}) =>{
        debugger;
        commit('setSearchedMeals',data);
    })
}