const state = {
    items:[]
}
const getters = {
    cartinfo(state,getters,rootState){
        return state.items.map(item =>{
            let product=rootState.product.data.find(product=>product.id===item.id)
            // console.log(item.quentitiy)
            return{
                name: product.name,
                price: product.price,
                quentitiy: item.quentitiy
            }
        })
    },
    carttotal(state,getters){
        return getters.cartinfo.reduce((total,item) =>{
            return total + item.price * item.quentitiy
        },0)
    }
    
}
const actions = {
    addtocart({commit},product){
        if(product.inventory>0){
           let index = state.items.find(item=>item.id===product.id)

            if(!!index){
                commit('addcount',{id:product.id})
            }else{
                commit('pushpro',{id:product.id,quentitiy:1})
            } 
             
            commit("product/decreaseinventory",{id:product.id},{root:true})
        }
        
    }
}
const mutations = {
    addcount(state,{id}){
        const item=state.items.find(item=>item.id===id)
        item.quentitiy++
    },
    pushpro(state,product){
        state.items.push(product)
    }
}
export default({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})




