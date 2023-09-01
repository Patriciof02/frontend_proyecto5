export const types = {
    setProductState: '[PRODUCT] Set Product State',
    setError:'[PRODUCT] set Error',
}

const productReducer = (state, action = {}) => {
    switch (action.type){
        case types.setProductState:
        return {
            ...state,
            user: action.payload,

        }
        case types.setError:
            return{
                ...state,
                error:action.payload,
            }
       


        default:
            return state;
        
    }

}

export default productReducer;