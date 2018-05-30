import Helmet from 'react-helmet'
import React from 'react'

export default class Helvetica extends React.Component {
    constructor() {
        super()
        const labels = [
            'ITLISASTIME',
            'ACQUARTERDC',
            'TWENTYFIVEX',
            'HALFBTENFTO',
            'PASTERUNINE',
            'ONESIXTHREE',
            'FOURFIVETWO',
            'EIGHTELEVEN',
            'SEVENTWELVE',
            'TENSEOCLOCK'
        ]
        this.state = {
            blink: labels.map(i => Array.from(i).map(j => 0)),
            labelArr: labels.map(i => Array.from(i)),
            labels: labels
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.tick()
        this.interval = setInterval(this.tick, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    getTimeString() {
        let timeString = ['IT', 'IS']
        const numStrings = [
            'ZERO',
            'ONE',
            'TWO',
            'THREE',
            'FOUR',
            'FIVE',
            'SIX',
            'SEVEN',
            'EIGHT',
            'NINE',
            'TEN',
            'ELEVEN',
            'TWELVE'
        ]
        const vagueMinLabels = [
            '',
            'FIVE',
            'TEN',
            'QUARTER',
            'TWENTY',
            'TWENTYFIVE',
            'HALF'
        ]
        const date = new Date()
        const minutes = date.getMinutes()
        let hours = date.getHours()
        hours = hours % 12 || hours || 12
        const roundedMins = Math.floor(minutes / 5) * 5
        for (let i = 0; i < 7; i++) {
            if ([i * 5, 60 - (i * 5)].indexOf(roundedMins) !== -1) {
                timeString.push(vagueMinLabels[i])
                break;
            }
        }
        if (roundedMins > 0) {
            if (roundedMins > 30) {
                timeString.push('TO')
                hours++;
                hours = hours % 12 || hours || 12
            } else {
                timeString.push('PAST')
            }
        }
        timeString.push(numStrings[hours])
        if (roundedMins === 0) {
            timeString.push('OCLOCK')
        }
        return timeString.filter(i => i !== '')
    }

    getBlinkState(labels, timeString) {
        const blinkState = labels.map(i => Array.from(i).map(j => 0))
        let startJ = 0
        let startK = 0
        timeString.forEach((i, ix) => {
            for (let j = startJ; j < labels.length; j++) {
                if (labels[j].substring(startK).indexOf(i) < 0) {
                    j++
                }
                const idx = labels[j].indexOf(i)
                if (idx !== -1) {
                    for (let k = 0; k < i.length; k++) {
                        blinkState[j][idx + k] = 1
                        startK = idx + k - 1
                    }
                    startJ = j
                    break
                }
                startK = 0
            }
        });
        return blinkState
    }

    tick() {
        const timeString = this.getTimeString()
        this.setState({
            blink: this.getBlinkState(this.state.labels, timeString)
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Helvetica</title>
                </Helmet>
                <div id="main" className="alt">
                    <div className="inner">
                        <header className="major">
                            <h1>Particles</h1>
                        </header>
                        <div style={{ margin: '5vw auto' }}>
                            {
                                this.state.labelArr.map((i, k) => {
                                    return <div style={{
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        lineHeight: '1em',
                                        textAlign: 'center'
                                    }} key={k}>
                                        {
                                            i.map((j, l) => {
                                                return <div style={{
                                                    color: this.state.blink[k][l] ? '#DDDDDD' : '#606060',
                                                    display: 'inline-block',
                                                    fontSize: '3vw',
                                                    height: '4vw',
                                                    textAlign: 'center',
                                                    width: '4vw'
                                                }} key={l}>{j}</div>;
                                            })
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
