import { createContext, useContext, useReducer } from 'react'
import { UserReducer } from '../reducers'

const userDetails = createContext()

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, {
    step: 1,
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    workspaceType: ''
  })

  return (
    <userDetails.Provider value={{ userState, userDispatch }}>
      {children}
    </userDetails.Provider>
  )
}

const useUser = () => useContext(userDetails)

export { UserProvider, useUser }
