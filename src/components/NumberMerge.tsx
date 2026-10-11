import { useState } from 'react'
import { mergeTarget } from '../content/gameConfig'

const START = [2, 2, 4, 2, 4, 2, 2, 4, 2, 2, 4, 2, 4, 2, 2, 4]
type Props = { onWin: () => void }

export default function NumberMerge({ onWin }: Props) {
  const [tiles, setTiles] = useState(START)
  const [path, setPath] = useState<number[]>([])
  const [message, setMessage] = useState('Tap adjacent matching tiles to connect them, then merge.')
  const [won, setWon] = useState(false)

  function choose(index: number) {
    if (won || tiles[index] === 0) return
    const previous = path[path.length - 1]
    const adjacent = previous !== undefined && Math.abs(Math.floor(index / 4) - Math.floor(previous / 4)) + Math.abs(index % 4 - previous % 4) === 1
    if (path.includes(index)) setPath(path.slice(0, path.indexOf(index) + 1))
    else if (previous === undefined || !adjacent || tiles[index] !== tiles[previous]) setPath([index])
    else setPath([...path, index])
    setMessage('Connect matching neighbours. Two or more tiles make a merge.')
  }

  function merge() {
    if (path.length < 2) { setMessage('You need at least two matching tiles. I thought you liked this game.'); return }
    const next = [...tiles]
    const value = tiles[path[path.length - 1]] * 2
    path.slice(0, -1).forEach((index) => { next[index] = 0 })
    next[path[path.length - 1]] = value
    const empty = next.map((tile, index) => tile === 0 ? index : -1).filter((index) => index >= 0)
    if (empty.length) next[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < .75 ? 2 : 4
    setTiles(next); setPath([])
    if (value >= mergeTarget) { setWon(true); onWin(); setMessage(`${value} reached. Evidence secured.`) }
    else setMessage(`${value} tile. Target: ${mergeTarget}. Keep going.`)
  }

  function restart() {
    setTiles(START)
    setPath([])
    setWon(false)
    setMessage('Fresh board. Same target. Try not to get caught again.')
  }

  return <div className="merge-game">
    <div className="merge-meta"><span>MERGE TARGET</span><strong>{mergeTarget}</strong><span>BEST TILE</span><strong>{Math.max(...tiles)}</strong></div>
    <div className="number-board" role="group" aria-label="Number merge board">
      {tiles.map((tile, index) => <button type="button" key={index} className={`number-tile tile-${tile} ${path.includes(index) ? 'is-selected' : ''}`} onClick={() => choose(index)} disabled={won} aria-label={tile ? `${tile}${path.includes(index) ? ', selected' : ''}` : 'empty tile'}>{tile || '·'}</button>)}
    </div>
    <div className="merge-actions"><p role="status">{message}</p><button className="button button-primary" onClick={merge} disabled={won}>MERGE SELECTED</button></div>
    {!won && <button className="text-button restart-board" onClick={restart}>Board stuck? Start a fresh board.</button>}
    <p className="merge-footnote">Tap a tile, then trace adjacent matching tiles. The target can be changed in <code>gameConfig.ts</code>.</p>
  </div>
}
