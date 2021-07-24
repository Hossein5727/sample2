import React from 'react'
import ComponentB from './ComponentB'

export const userContext = React.createContext()
export const userSalary = React.createContext()
function ComponentA() {
    return (
        <React.Fragment>
            <userContext.Provider value="Hossein">
                <userSalary.Provider value="2000$">
                    <ComponentB />
                </userSalary.Provider>
            </userContext.Provider>
        </React.Fragment>
    )
}

export default ComponentA