# Tictactoe Server

> For multiplayer

## Notes

**When player do a move**

- Get [x,y] of move
- Check result of game with the location of move and current game state
  - End with win/lose or draw
- If it's not over yet: 
  - Change game state
  - Change turn
  - Emit the state `{ board, turn }` 

