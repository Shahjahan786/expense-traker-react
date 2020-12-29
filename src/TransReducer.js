export default function TransReducer(state, action){

    switch(action.type){
        case "ADD":
            return [action.payload, ...state]
        case "DEL":
            
            return state.filter(transObj => {
        
                return transObj.id !== action.payload
            });
        default:
            return state;
    }
}