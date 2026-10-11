import { useEffect, useState } from 'react'
import { finaleNote, rooms } from '../content/gameConfig'
import MemoryPanel from '../components/MemoryPanel'
import RoomFrame from '../components/RoomFrame'
import { loadProgress, saveProgress, type Progress } from '../state/gameProgress'

export default function App() {
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const completed = progress.completed
  const nextIndex = Math.min(completed.length, rooms.length - 1)
  useEffect(() => { saveProgress(progress) }, [progress])

  function completeRoom(id: string) {
    setProgress((current) => current.completed.includes(id) ? current : { ...current, completed: [...current.completed, id] })
    window.setTimeout(() => document.getElementById(`room-${rooms[Math.min(completed.length + 1, rooms.length - 1)].id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 180)
  }

  function updateHint(id: string, count: number) {
    setProgress((current) => ({ ...current, hintsUsed: { ...current.hintsUsed, [id]: count } }))
  }

  return <div className="site-shell">
    <header className="site-header"><a className="brand" href="#top"><span className="brand-mark">✳</span> THE BIRTHDAY CASE FILES</a><span className="header-status"><i /> PRIVATE INVESTIGATION</span></header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> A VERY PERSONAL INVESTIGATION <span className="eyebrow-line" /></p>
          <h1>HAPPY BIRTHDAY,<br /><em>BHOOTNI.</em></h1>
          <p className="hero-lede">Aghh, Happy birthdy bhootni ji. pichli baar aaram se chor dia tha... kuch nai pdha tha na tmne.. or bday ke baad mera wish pdha.. huhh... to iss baar sab pdhna hi pdega, so here is escape room for the world's most unreliable detective.</p>
          <a className="button button-primary hero-button" href={`#room-${rooms[nextIndex].id}`}> {completed.length ? 'CONTINUE THE INVESTIGATION' : 'BEGIN THE INVESTIGATION'} <span>↓</span></a>
          <p className="hero-footnote">EST. 9+ YEARS OF FRIENDSHIP · 1 PHONE CALLS(under bizarre circumstances)</p>
        </div>
        <div className="case-stamp" aria-label="Birthday case file illustration"><div className="stamp-ring"><span>CLASSIFIED</span><b>CASE<br />B-08</b><span>OPEN FILE</span></div><div className="stamp-flower">✳</div></div>
        <div className="hero-index"><span>INVESTIGATION</span><b>01 / 12</b></div>
      </section>

      <section className="investigation" aria-label="Escape room">
        <div className="section-heading"><div><p className="eyebrow">THE EVIDENCE BOARD</p><h2>One room at a time.</h2></div><p>{completed.length} / {rooms.length} FILES CLEARED</p></div>
        <div className="room-list">
          {rooms.map((room, index) => {
            const isUnlocked = index <= nextIndex || completed.includes(room.id)
            return isUnlocked ? <RoomFrame key={room.id} room={room} completed={completed.includes(room.id)} onComplete={() => completeRoom(room.id)} hintCount={progress.hintsUsed[room.id] ?? 0} onHint={(count) => updateHint(room.id, count)} /> : <article className="locked-room" key={room.id}><span>ROOM {room.number}</span><strong>FILE SEALED</strong><span>Clear the previous room to access.</span><b>⌑</b></article>
          })}
        </div>
        <p className="content-note">{finaleNote}</p>
      </section>
      <footer className="site-footer"><span>MADE WITH UNNECESSARY INVESTIGATIVE EFFORT</span><span>ACTUAL MEETING: STILL PENDING <b>🌸</b></span></footer>
    </main>
    <MemoryPanel rooms={rooms} completed={completed} />
    <div className="page-grain" aria-hidden="true" />
  </div>
}
