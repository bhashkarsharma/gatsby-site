import Game from './game'
import Helmet from 'react-helmet'
import Instructions from './instructions'
import Leaderboard from './leaderboard'
import React from 'react'

export default class Set extends React.Component {
    constructor() {
        super()
        this.state = {
            difficulty: 0,
            display: 0,
            gameOver: false,
            hints: 0,
            score: 0,
            time: 0,
            timed: false
        }
    }

    setDifficulty(difficulty) {
        this.setState({ difficulty })
    }

    setTimed(timed) {
        this.setState({ timed })
    }

    showView(display) {
        this.setState({ display })
        if (display === 2) {
            this.updateStats(0, 0, 0, false)
        }
    }

    updateStats(score, hints, time, gameOver) {
        this.setState({ score, hints, time, gameOver })
        if (gameOver) {
            this.showView(3)
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Set</title>
                </Helmet>
                <div id="main" className="alt">
                    <div className="inner">
                        <header className="major">
                            <h1>Set</h1>
                        </header>
                        <div className="game-container">
                            {this.state.display > 0 &&
                                <div className="button" onClick={this.showView.bind(this, 0)}>Back</div>}
                            {{
                                0: (
                                    <div className="menu">
                                        <button onClick={this.showView.bind(this, 1)}>Instructions</button>
                                        <button onClick={this.showView.bind(this, 2)}>Play Game</button>
                                        <button onClick={this.showView.bind(this, 2)}>Resume Game</button>
                                        <button onClick={this.showView.bind(this, 4)}>Leaderboard</button>
                                    </div>
                                ),
                                1: (
                                    <Instructions></Instructions>
                                ),
                                2: (
                                    <div>
                                        <div>
                                            <label className={`sans-serif ${this.state.difficulty === 0 ? 'chosen' : ''}`} onClick={this.setDifficulty.bind(this, 0)}>Easy</label>
                                            {this.state.difficulty === 0 && <div className="fa-holder"><i className="fa fa-toggle-off"></i></div>}
                                            {this.state.difficulty === 1 && <div className="fa-holder"><i className="fa fa-toggle-on"></i></div>}
                                            <label className={`sans-serif ${this.state.difficulty === 1 ? 'chosen' : ''}`} onClick={this.setDifficulty.bind(this, 1)}>Medium</label>
                                        </div>
                                        <div>
                                            <label className={`sans-serif ${!this.state.timed ? 'chosen' : ''}`} onClick={this.setTimed.bind(this, false)}>Free</label>
                                            {this.state.timed === false && <div className="fa-holder"><i className="fa fa-toggle-off"></i></div>}
                                            {this.state.timed === true && <div className="fa-holder"><i className="fa fa-toggle-on"></i></div>}
                                            <label className={`sans-serif ${this.state.timed ? 'chosen' : ''}`} onClick={this.setTimed.bind(this, true)}>Timed</label>
                                        </div>
                                        <div className="button" onClick={this.showView.bind(this, 3)}>Start</div>
                                    </div>
                                ),
                                3: (
                                    <Game
                                        difficulty={this.state.difficulty}
                                        timed={this.state.timed}
                                        updateStats={this.updateStats.bind(this)}>
                                    </Game>
                                ),
                                4: (
                                    <Leaderboard
                                        gameOver={this.state.gameOver}
                                        score={this.state.score}
                                        hints={this.state.hints}
                                        time={this.state.time}>
                                    </Leaderboard>
                                )
                            }[this.state.display]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
