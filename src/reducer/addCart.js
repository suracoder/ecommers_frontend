import {  ADD_CART} from "../action/type";
const intialState = {
data:{}
}


const addToCartt = (state = intialState, action) => {
    switch (action.type) {
        case ADD_CART:
            let variant={}
           console.log("first cl;ick ",action.data)
if(state.data.length!=0){
    if(state.data.id==action.data.id){
        variant= action.data
    }else{
        let y=action.data
     let d={...state.data,y}
     variant=y
    }
}else{
    variant=action.data
}
            return {
                data:variant
            }

        default: return state;
    }
}
export default addToCartt;
