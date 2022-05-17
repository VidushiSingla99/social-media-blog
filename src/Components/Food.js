import React from 'react'
import { useContext } from 'react';
const UserContext = React.createContext(null)

export default function Food() {
    const value = useContext(UserContext);
  return (
    <div><span>{value}</span>;</div>
  )
}
