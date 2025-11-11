

export const formReducer = (state,action) =>{


    if(action.type == 'SET-NAME'){
        return {...state , name:action.payload}
    }
    if(action.type == 'SET-EMAIL'){
        return{...state , email:action.payload}
    }

    if(action.type == 'RESET'){
        return {name : "" , email:"" }
    }
}