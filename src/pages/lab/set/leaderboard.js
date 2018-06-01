import React from 'react'
import fire from './firebase/fire'

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            top: [],
            saved: false
        }
    }

    componentDidMount() {
        this.scoreDB = fire.database().ref('leaderboard')
        this.scorelistRef = this.scoreDB.child('scoreList')
        this.highestScoreRef = this.scoreDB.child('highestScore')
        this.getTopScores()
    }

    getTopScores() {
        const scoreList = this.scorelistRef.limitToLast(10)
        scoreList.once('value', snap => {
            const val = snap.val()
            const top = []
            Object.keys(val).forEach(i => {
                top.push(val[i])
            })
            top.sort((a, b) => b.score - a.score)
            this.setState({ top })
        })
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    saveScore() {
        const name = this.state.name
        const score = this.props.score
        const hints = this.props.hints
        const time = this.props.time
        if (name.length > 0) {
            const userScoreRef = this.scorelistRef.child(name)
            userScoreRef.setWithPriority({ name, score, hints, time }, score)

            this.highestScoreRef.transaction((currHigh) => {
                if (currHigh === null || score > currHigh) {
                    return score
                }
                return
            })

            this.setState({ saved: true })
        }
    }

    render() {
        return (
            <div className="leaderboard">
                {(this.props.gameOver && !this.state.saved) ?
                    <div className="scoreForm">
                        <input
                            type="text"
                            placeholder="Name"
                            maxLength="20"
                            value={this.state.name}
                            onChange={this.handleNameChange.bind(this)} />
                        <button onClick={this.saveScore.bind(this)}>Save</button>
                    </div> :
                    <div>
                        {this.state.top.length > 0 ?
                            <table className="scoreboard">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Score</th>
                                        <th>Time</th>
                                        <th>Hints</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.top.map((i, k) => {
                                            return <tr key={k}>
                                                <td>{i.name}</td>
                                                <td>{i.score}</td>
                                                <td>{i.time ? i.time : '-'}</td>
                                                <td>{i.hints ? i.hints : '-'}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table> :
                            <div>Loading...</div>}
                    </div>}
            </div>
        )
    }
}
