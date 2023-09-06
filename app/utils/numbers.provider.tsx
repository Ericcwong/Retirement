import { createContext, useContext, useState } from "react"
import type { Dispatch, ReactNode, SetStateAction } from "react"
const UserContext = createContext<number | undefined>(undefined)

export const UserProvider = ({ children }) => {
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  const updateUser = (newAge, newSalary) => {
    setAge(newAge)
    setSalary(newSalary)
  }

  return (
    <UserContext.Provider value={{ age, salary, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
