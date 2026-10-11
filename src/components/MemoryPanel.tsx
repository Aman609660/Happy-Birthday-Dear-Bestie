import type { Room } from '../content/gameConfig'

type Props = { rooms: Room[]; completed: string[] }
export default function MemoryPanel({ rooms, completed }: Props) {
  const memories = rooms.filter((room) => completed.includes(room.id) && room.memory)
  return <aside className="memory-panel" aria-label="Aman's Memory">
    <details>
      <summary><span>🧠 Aman's Memory</span><span className="memory-count">{memories.length} saved</span></summary>
      <div className="memory-content">
        {memories.length ? memories.map((room) => <p key={room.id}><span>ROOM {room.number}</span><strong>{room.memory}{room.personal ? ' 🌸' : ''}</strong></p>) : <p className="memory-empty">Memory loading... nothing found yet. Typical Aman.</p>}
      </div>
    </details>
  </aside>
}
