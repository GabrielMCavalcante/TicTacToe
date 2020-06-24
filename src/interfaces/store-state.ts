export default interface StoreState {
    gameState: string,
    currentPlayer: number,
    currentTile: string,
    type: string,
    scoreboardPvp: {
        player1: number,
        player2: number
    },
    scoreboardPve: {
        player: number,
        computer: number
    },
    difficulty: number,
    placedTiles: number[],
    freeTiles: number[],
    winner: number
}