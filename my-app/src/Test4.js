import React from 'react'

// class test4 extends React.Component {
//     constructor() {
//         super()
//     }
//     render() {

//     }
// }
function Test4(props) {
    if (props.myname === 'Hossein') {
        throw new Error('Fuck You 🤏🤏')
    }
    return (
        <h1>{props.myname}</h1>
    )
}
export default Test4