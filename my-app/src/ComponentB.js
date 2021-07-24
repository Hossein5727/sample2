import React, { useContext } from 'react'
import { userContext, userSalary } from './ComponentA'

function ComponentB() {
    const name = useContext(userContext)
    const salary = useContext(userSalary)
    return (
        <React.Fragment>
            <p>my name is {name} and salary is {salary}</p>
            {/* <p>Mammad</p> */}
        </React.Fragment>
    )
}

export default ComponentB