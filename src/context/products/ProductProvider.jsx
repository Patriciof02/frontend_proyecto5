import {ProductContext} from "../products/ProductContext"
import {useReducer} from 'react'
import userReducer from './productReducer'

export const ProductProvider = ({children}) => {

  const [state, dispatch] = useReducer(ProductReducer, null)

  return (
    <ProductContext.Provider value={[state, dispatch]} >
        {children}
    </ProductContext.Provider>
  )
}

