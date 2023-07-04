import React from "react"
//1.Creating context

const UserContext= React.createContext('Centre for good governance')

const UserProvider=UserContext.Provider
const USerConsumer = UserContext.Consumer

export {USerConsumer,UserProvider}

export default UserContext