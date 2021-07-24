import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RequestHook() {
    const [employees, setemployees] = useState([])

    useEffect(() => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                setemployees(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])
    //     let em = employees.data && employees.data.length > 0 ? employees.data.map((employee) => {<p>{employee.employee_name}</p>) : <p>error</p>}
    //         
    // 

    return (
        <React.Fragment>
            {employees.data && employees.data.length > 0 ? employees.data.map((item) => <p>name is :  {item.employee_name}</p>) : <p>error</p>}
        </React.Fragment>
    )
}

export default RequestHook