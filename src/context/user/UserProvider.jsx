/* eslint-disable react/prop-types */
import {UserContext} from "./UserContext"
import {useReducer} from 'react'
import userReducer from './userReducer'

export const UserProvider = ({children}) => {

  const [state, dispatch] = useReducer(userReducer, null)

  return (
    <UserContext.Provider value={[state, dispatch]} >
        {children}
    </UserContext.Provider>
  )
}


