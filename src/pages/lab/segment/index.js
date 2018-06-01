import './index.scss'

import Helmet from 'react-helmet'
import React from 'react'

class Digit extends React.Component {
    constructor(props) {
        super(props)
        this.pattern = {
            0: [4, 2, 0, 2, 4, 2, 0, 6, 4, 6, 6, 0],
            1: [4, 2, 0, 1, 5, 2, 0, 6, 0, 2, 6, 0],
            2: [4, 2, 0, 2, 2, 2, 1, 6, 5, 6, 6, 0],
            3: [4, 2, 1, 2, 5, 6, 1, 6, 5, 0, 6, 0],
            4: [4, 2, 1, 0, 5, 6, 0, 6, 2, 0, 6, 0],
            5: [4, 2, 2, 6, 4, 6, 0, 2, 2, 0, 6, 2],
            6: [4, 2, 1, 6, 5, 6, 0, 2, 4, 6, 6, 2],
            7: [4, 2, 1, 2, 5, 0, 6, 6, 2, 0, 6, 0],
            8: [0, 6, 0, 2, 6, 0, 0, 6, 2, 6, 6, 0],
            9: [0, 6, 0, 2, 6, 2, 1, 2, 2, 5, 6, 0]
        }
    }

    render() {
        return (
            <div className="digit">
                {
                    [0, 1, 2, 3, 4, 5].map((i, k) => {
                        const trans1 = {
                            transform: `rotateZ(${this.pattern[this.props.val][2 * i] * 45}deg)`
                        };
                        const trans2 = {
                            transform: `rotateZ(${this.pattern[this.props.val][2 * i + 1] * 45}deg)`
                        };
                        return <div key={k} className="node">
                            <div className="edge" style={trans1}></div>
                            <div className="edge" style={trans2}></div>
                            <div className="edge mask"></div>
                            <div className="edge mask"></div>
                            <div className="knob">
                                <div className="inner"></div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}



export default class Segment extends React.Component {
    constructor() {
        super()
        this.state = {
            time: ['0', '0', '0', '0', '0', '0']
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.tick()
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick() {
        const date = new Date()
        let time = []
        const d = [date.getHours(), date.getMinutes(), date.getSeconds()]
        d.forEach(i => {
            if (i >= 10) {
                time = time.concat(String(i).split(''))
            } else {
                time = time.concat(['0', String(i)])
            }
        })
        this.setState({ time })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Segment</title>
                </Helmet>
                <div id="main" className="alt">
                    <div className="inner">
                        <header className="major">
                            <h1>Segment</h1>
                        </header>

                        <div className="segment">
                            <div className="error-message">Your screen is too small.
                    Try viewing in landscape mode, or use a bigger device.</div>
                            <div className="clock">
                                {
                                    this.state.time.map((i, k) => {
                                        return <Digit key={k} val={i}></Digit>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
