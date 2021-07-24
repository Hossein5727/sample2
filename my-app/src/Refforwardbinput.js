import React from 'react'

const Refforwardbinput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})
export default Refforwardbinput