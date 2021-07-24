import React, { useEffect, useState } from 'react'

function HookTimer() {
    const [tick, setTick] = useState(0)
    const [interval, setintervall] = useState()


    const start = () => {
        if (interval == null) {
            alert('Start')
            setintervall(setInterval(() => {
                setTick(prevState => prevState + 1)
            }, 1000))
        }
    }

    const reset = () => {
        setTick(0)

    }
    const stop = () => {
        setintervall(null)
        clearInterval(interval)
    }

    return (
        <React.Fragment>
            <div style={{ marginLeft: 'auto', backgroundColor: 'skyblue', textAlign: 'center', padding: '20px', borderRadius: '20px', boxShadow: '4px 4px 4px darkcyan' }}>
                <h1 id="tobi1" style={{ fontSize: '35px', marginTop: '0', paddingTop: '0', backgroundColor: 'coral', padding: '7px', borderRadius: '4px', boxShadow: '8px 8px 4px gray' }}>Timer</h1>
                <h1 id="show1"> {tick}</h1>
                <button className="btn1" onClick={start}>Start</button>
                <button className="btn1" onClick={reset}>Reset</button>
                <button className="btn1" onClick={stop}>Stop</button>
                {/* <h2>{new Date().toLocaleTimeString()}</h2> */}
            </div>
        </React.Fragment>
    )
}

export default HookTimer


