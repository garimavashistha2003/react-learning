export const ageReducer = (state,action)=>{
    if(action.type === "change-name"){
        return {...state , 
            name : action.payload,
        }
    }
    if(action.type === "changee-age"){
        return{...state, age : action.payload}
    }
    if(action.type === 'increase-age'){
        return {...state, age:state.age+1}
    }
}