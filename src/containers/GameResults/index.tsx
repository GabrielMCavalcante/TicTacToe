import React, { useRef } from 'react'

// Redux connection
import { connect } from 'react-redux'

// Actions
import global from 'store/actions/global'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

// Interfaces
import StoreState from 'interfaces/store-state'

interface ScoreBoard {
    [key: string]: number
}

let scoreboard: number[]
let loaded = false

function GameResults(props: any) {

    const score1Ref = useRef(null)
    const score2Ref = useRef(null)

    const {
        tie,
        type,
        history,
        gameState,
        onPlayAgain,
        currentPlayer,
        onReturnToMenu,
        onChangeGamestate
    } = props

    const resultOptionsConfig = [
        {
            name: 'Play again', onclick: () => {
                loaded = false
                onPlayAgain()
                onChangeGamestate('playing')
                history.push('/game')
            }
        },
        { name: 'Reset scoreboard', onclick: resetScoreboard },
        {
            name: 'Return to menu', onclick: () => {
                loaded = false
                onReturnToMenu()
                history.push('/')
            }
        }
    ]

    function resetScoreboard() {
        if (type === 'pvp') localStorage.setItem('pvpScoreboard', JSON.stringify({
            player1: 0,
            player2: 0
        }))
        else if (type === 'pve') localStorage.setItem('pveScoreboard', JSON.stringify({
            player: 0,
            computer: 0
        }))

        const references = [score1Ref, score2Ref]
        references.forEach(ref => {
            const el = ref.current as unknown as HTMLSpanElement
            el.innerHTML = '0'
        })
    }

    if (gameState === 'results' && !loaded) {
        loaded = true
        let currentScoreboard: ScoreBoard
        if (type === 'pvp') {
            if (!localStorage.getItem('pvpScoreboard')) {
                localStorage.setItem('pvpScoreboard', JSON.stringify({
                    player1: 0,
                    player2: 0
                }))
            }

            if (!tie) {
                currentScoreboard = JSON.parse(localStorage.getItem('pvpScoreboard')!)

                localStorage.setItem('pvpScoreboard', JSON.stringify({
                    ...currentScoreboard,
                    [currentPlayer]: currentScoreboard[currentPlayer] + 1
                }))
            }

            scoreboard = Object.values(JSON.parse(localStorage.getItem('pvpScoreboard')!))
        }
        else if (type === 'pve') {
            if (!localStorage.getItem('pveScoreboard')) {
                localStorage.setItem('pveScoreboard', JSON.stringify({
                    player: 0,
                    computer: 0
                }))
            }

            if (!tie) {
                currentScoreboard = JSON.parse(localStorage.getItem('pveScoreboard')!)

                localStorage.setItem('pveScoreboard', JSON.stringify({
                    ...currentScoreboard,
                    [currentPlayer]: currentScoreboard[currentPlayer] + 1
                }))
            }

            scoreboard = Object.values(JSON.parse(localStorage.getItem('pveScoreboard')!))
        }
        else {
            onReturnToMenu()
            history.push('/')
        }
    }

    let showcasePlayers = ['Player 1', 'Player 2']
    if (type === 'pve') showcasePlayers = ['Player', 'Computer']

    let resultMessage = 'It´s a tie!'

    if (!tie) {
        switch (currentPlayer) {
            case 'player2':
                {
                    resultMessage = 'Player 2 wins!'
                    break
                }
            case 'player':
                {
                    resultMessage = 'You win!'
                    break
                }
            case 'computer':
                {
                    resultMessage = 'Computer wins!'
                    break
                }
            default: resultMessage = 'Player 1 wins!'
        }
    }

    return (
        <div className="GameResults">
            <h2>{resultMessage}</h2>

            <div className="Results">
                <div className="ResultField">
                    <p className="FieldTitle">{showcasePlayers[0]}</p>
                    <p className="FieldContent">
                        <span ref={score1Ref}>{scoreboard[0]}</span> victories
                    </p>
                </div>

                <div className="FieldSeparator"></div>

                <div className="ResultField">
                    <p className="FieldTitle">{showcasePlayers[1]}</p>
                    <p className="FieldContent">
                        <span ref={score2Ref}>{scoreboard[1]}</span> victories
                    </p>
                </div>
            </div>

            <div className="Options">
                <Controls
                    numberOfControls={resultOptionsConfig.length}
                    controlConfig={resultOptionsConfig}
                />
            </div>
        </div>
    )
}

function mapStateToProps(state: StoreState) {
    return {
        currentPlayer: state.currentPlayer,
        type: state.type,
        gameState: state.gameState,
        tie: state.tie
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onReturnToMenu: () => dispatch(global.onReturnToMenu()),
        onPlayAgain: () => dispatch(global.onRestart()),
        onChangeGamestate: (newGamestate: string) => dispatch(global.onChangeGamestate(newGamestate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResults)