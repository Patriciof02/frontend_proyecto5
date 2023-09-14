import { ProductContext } from './productContext'
import {useReducer} from 'react'
import productReducer from './productReducer'

export const ProductProvider = ({children}) => {

  const [state, dispatch] = useReducer(productReducer, null)

  return (
    <ProductContext.Provider value={[state, dispatch]} >
        {children}
    </ProductContext.Provider>
  )
}

