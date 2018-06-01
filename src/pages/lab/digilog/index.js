import './index.scss'

import Helmet from 'react-helmet'
import React from 'react'

class Face extends React.Component {
    constructor(props) {
        super(props)
        this.pattern = {
            0: [0, 2, 2, 4, 2, 6, 2, 6, 0, 6, 4, 6],
            1: [3, 3, 2, 2, 3, 3, 2, 6, 3, 3, 6, 6],
            2: [0, 0, 2, 4, 0, 2, 4, 6, 0, 6, 4, 4],
            3: [0, 0, 2, 4, 0, 0, 2, 6, 0, 0, 4, 6],
            4: [2, 2, 2, 2, 0, 6, 2, 6, 3, 3, 6, 6],
            5: [0, 2, 4, 4, 0, 6, 2, 4, 0, 0, 4, 6],
            6: [0, 2, 4, 4, 2, 6, 2, 4, 0, 6, 4, 6],
            7: [0, 0, 2, 4, 3, 3, 2, 6, 3, 3, 6, 6],
            8: [0, 2, 2, 4, 0, 6, 4, 6, 0, 6, 4, 6],
            9: [0, 2, 2, 4, 0, 6, 4, 6, 0, 0, 4, 6]
        }
    }

    render() {
        return (
            <div className="face">
                {
                    [0, 1, 2, 3, 4, 5].map((i, k) => {
                        const trans1 = {
                            transform: `rotateZ(${this.props.mode ? this.pattern[this.props.val][2 * i] * 45 : this.props.hh}deg)`
                        };
                        const trans2 = {
                            transform: `rotateZ(${this.props.mode ? this.pattern[this.props.val][2 * i + 1] * 45 : this.props.mm}deg)`
                        };
                        return <div key={k} className="node">
                            {this.props.mode ? <div className="hand mask"></div> : ''}
                            <div className="hand" style={trans1}></div>
                            <div className="hand" style={trans2}></div>
                        </div>
                    })
                }
            </div>
        )
    }
}


export default class Digilog extends React.Component {
    constructor() {
        super()
        this.state = {
            hh: 0,
            mm: 0,
            mode: 1,
            time: [0, 0, 0, 0, 0, 0]
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
        if (this.state.mode === 0) {
            const h = date.getHours()
            const m = date.getMinutes()
            const mm = 6 * m - 90
            const hh = 0.5 * (60 * h + m) - 90
            this.setState({ hh, mm })
        } else {
            let time = []
            const bits = [date.getHours(), date.getMinutes(), date.getSeconds()]
            bits.forEach(i => {
                if (i >= 10) {
                    time = time.concat(String(i).split(''))
                } else {
                    time = time.concat(['0', String(i)])
                }
            });
            this.setState({ time })
        }
    }

    switchMode(mode) {
        this.setState({ mode })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Digilog</title>
                </Helmet>
                <div id="main" className="alt">
                    <div className="inner">
                        <header className="major">
                            <h1>Digilog</h1>
                        </header>
                        <div className="digilog">
                            <div className="face-box">
                                {
                                    this.state.time.map((i, k) => {
                                        return <Face mode={this.state.mode} hh={this.state.hh} mm={this.state.mm} val={i} key={k}></Face>
                                    })
                                }
                            </div>
                            <div>
                                <div>
                                    <label className={`sans-serif ${this.state.mode === 0 ? 'chosen' : ''}`} onClick={this.switchMode.bind(this, 0)}>Analog</label>
                                    {this.state.mode === 0 && <div className="fa-holder"><i className="fa fa-toggle-off"></i></div>}
                                    {this.state.mode === 1 && <div className="fa-holder"><i className="fa fa-toggle-on"></i></div>}
                                    <label className={`sans-serif ${this.state.mode === 1 ? 'chosen' : ''}`} onClick={this.switchMode.bind(this, 1)}>Digital</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
