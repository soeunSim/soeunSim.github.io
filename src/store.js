import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState : { name:'kim', age:20},
    reducers:{
        changeName(state){
            state.name = 'park'
        },
        changeAge(state){
            state.age =  state.age + 1
        }
    }
})
export let {changeName , changeAge} = user.actions

let stock = createSlice({
    name: 'stock',
    initialState : [10,11,12]
})

let cartData = createSlice({
    name:'cartData',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ], 
    reducers:{
        changeNum(state , actions){

           let num = state.findIndex((e)=> e.id == actions.payload)
           state[num].count++;
           state[num].name = '변경됨';
            return state;
        }
    }
})
export let { changeNum } = cartData.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock: stock.reducer,
    cartData: cartData.reducer
  }
}) 