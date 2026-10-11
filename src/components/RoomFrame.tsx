import { useState, type FormEvent } from 'react'
import type { Room } from '../content/gameConfig'
import { wrongAnswers } from '../content/gameConfig'
import EvidenceSlot from './EvidenceSlot'
import NumberMerge from './NumberMerge'

type Props = { room: Room; completed: boolean; onComplete: () => void; onHint: (count: number) => void; hintCount: number }
const memoryOptions = ['still awake?', 'Bhootni', 'bd me btaungi', 'Mausam kaisa hai', 'kachuwa ban ke baat krna?', 'suar hu mai','moon bkl','budhiya']
const memoryKey = ['still awake?', 'Bhootni', 'bd me btaungi', 'Mausam kaisa hai']
const originOrder = ['Same school, but they never met there(but a suar laughed at me when i fell)', 'First message: “still awake?”', 'Had Conversation on Facebook', 'switched to instagram with too many reels, but no guts to talk', 'unreal people went to a app called beReal', 'switched to telegram🌸']
const shownOriginOrder = ['Had Conversation on Facebook', 'switched to instagram with too many reels, but no guts to talk', 'Same school, but they never met there(but a suar laughed at me when i fell)', 'First message: “still awake?”', 'unreal people went to a app called beReal', 'switched to telegram🌸']

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/[.!?]+$/g, '').replace(/[’‘]/g, "'").replace(/\s+/g, ' ')
}

export default function RoomFrame({ room, completed, onComplete, onHint, hintCount }: Props) {
  const [answer, setAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [wrongMessage, setWrongMessage] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [showSuccess, setShowSuccess] = useState(completed)
  const [originSelection, setOriginSelection] = useState<string[]>([])
  const [recallSelection, setRecallSelection] = useState<string[]>([])
  const [photoChoice, setPhotoChoice] = useState<'L' | 'R' | null>(null)

  function accept() { setShowSuccess(true); setWrongMessage(''); onComplete() }
  function incorrect() {
    const next = attempts + 1
    setAttempts(next)
    setWrongMessage(wrongAnswers[Math.min(next - 1, wrongAnswers.length - 1)])
  }
  function submit(event: FormEvent) {
    event.preventDefault()
    if (normalize(answer) === normalize(room.answer ?? '')) accept()
    else incorrect()
  }
  function revealHint() {
    const next = Math.min(hintCount + 1, room.hints?.length ?? 0)
    if (next) { onHint(next); setShowHint(true) }
  }
  function submitDiary(event: FormEvent) {
    event.preventDefault()
    if (normalize(answer) === normalize('I won’t bother u anymore')) accept()
    else incorrect()
  }
  function submitOrigin() {
    if (originSelection.every((fact, index) => fact === originOrder[index])) accept()
    else { incorrect(); setOriginSelection([]) }
  }
  function submitRecall() {
    if (recallSelection.length === memoryKey.length && memoryKey.every((fact) => recallSelection.includes(fact))) accept()
    else incorrect()
  }

  return <article className={`room-card ${completed ? 'is-complete' : ''}`} id={`room-${room.id}`}>
    <div className="room-topline"><span>{room.eyebrow}</span><span>ROOM {room.number}</span></div>
    <h2>{room.title}</h2>
    {room.id === 'only-fight' && <EvidenceSlot src="assets/diary/only-fight-before.jpg" label="The Only Fight · opening image" alt="Opening image for The Only Fight room" />}
    <p className="room-intro">{room.intro}</p>
    {room.kind === 'intro' && <button className="button button-primary" onClick={accept}>{completed ? 'ROOM UNLOCKED ✓' : 'ENTER THE ROOM'} <span aria-hidden="true">→</span></button>}
    {room.kind === 'answer' && !showSuccess && <PuzzleForm room={room} answer={answer} setAnswer={setAnswer} submit={submit} attempts={attempts} wrongMessage={wrongMessage} revealHint={revealHint} hintCount={hintCount} showHint={showHint} />}
    {room.kind === 'number-merge' && !showSuccess && <><NumberMerge onWin={accept} /><PuzzleActions onHint={revealHint} hintCount={hintCount} hint={room.hints?.[hintCount - 1]} showHint={showHint} wrongMessage={wrongMessage} attempts={attempts} /></>}
    {room.kind === 'number-merge' && showSuccess && room.image && <EvidenceSlot src={room.image} label="Koi to khushi khushi apna game khel rha mast.. lol(maybe to avoid any kind of Conversation to anyone) " alt="Placeholder for the 2248 photo" />}

    {room.kind === 'mission' && <>
      {!showSuccess && <PuzzleForm room={room} answer={answer} setAnswer={setAnswer} submit={submit} attempts={attempts} wrongMessage={wrongMessage} revealHint={revealHint} hintCount={hintCount} showHint={showHint} />}
      {showSuccess && <div className="mission-result"><span>MISSION RESULT</span><strong>TARGET: NOT FOUND</strong><p>VISUAL CONTACT: 0<br />SKOOTIE SPEED: QUESTIONABLE<br />MISSION: FAILED<br />MEMORY: PERMANENT</p></div>}
      {showSuccess && ['clue-01.jpg', 'clue-02.jpg', 'clue-03.jpg', 'clue-04.jpg'].map((file, index) => <EvidenceSlot key={file} src={`assets/meet-up/${file}`} label={` ${index + 1} . locations where we may have seen each other lol. but missed by skootie's speed `} alt={`Placeholder for Buxar location clue ${index + 1}`} />)}
    </>}

    {room.kind === 'diary' && <>
      {!completed && <form className="answer-form" onSubmit={submitDiary}>
        <label htmlFor={`answer-${room.id}`}>What did you write in your diary while crying?</label>
        <div className="answer-row"><input id={`answer-${room.id}`} value={answer} onChange={(event) => setAnswer(event.target.value)} autoComplete="off" placeholder="Type the words you remember…" /><button className="button button-primary">REVEAL ENTRY</button></div>
      </form>}
      {completed && <>{room.image && <EvidenceSlot src={room.image} label="Diary screenshot: I won't bother u anymore... agghh.. you just went after i sent byee... and came back the day after.. i can still sence some anger within you for that... and i am still very sorry for that day.. lol" alt="Placeholder for the diary screenshot" />}<p className="diary-bridge">Later, I realized how badly I’d handled things, apologized, and you wrote “matter solved.” But i still am sorry for what happend. Happy Birthday little Angry Bird.. lol  🌸</p><EvidenceSlot src="assets/diary/matter-solved.jpg" label="Diary screenshot: matter solved... maybe i literally forced you to write that in your diary.. maybe you never forgave me for that .. lol .. only god, you and that dear diary knows the truth afterall.. lol " alt="Placeholder for the matter solved diary screenshot" /></>}
      {!completed && <PuzzleActions onHint={revealHint} hintCount={hintCount} hint={room.hints?.[hintCount - 1]} showHint={showHint} wrongMessage={wrongMessage} attempts={attempts} />}
    </>}

    {room.kind === 'never-met' && !showSuccess && <div className="order-puzzle">
      <p className="puzzle-instruction">Select the facts in chronological order.</p>
      <ol className="order-tray">{originSelection.map((fact) => <li key={fact}>{fact}</li>)}</ol>
      <div className="choice-list">{shownOriginOrder.map((fact) => <button key={fact} className="choice-button" disabled={originSelection.includes(fact)} onClick={() => setOriginSelection([...originSelection, fact])}>{fact}<span>{originSelection.includes(fact) ? '✓' : '+'}</span></button>)}</div>
      <PuzzleActions onHint={revealHint} hintCount={hintCount} hint={room.hints?.[hintCount - 1]} showHint={showHint} wrongMessage={wrongMessage} attempts={attempts} onCheck={submitOrigin} checkDisabled={originSelection.length !== originOrder.length} />
    </div>}

    {room.kind === 'photo' && <div className="photo-choice-puzzle">
      <p className="puzzle-instruction">Choose L or R.</p>
      <div className="photo-choice-buttons" role="group" aria-label="Choose a photo">
        {(['L', 'R'] as const).map((side) => <button key={side} className={`photo-choice-button ${photoChoice === side ? 'selected' : ''}`} aria-pressed={photoChoice === side} onClick={() => setPhotoChoice(side)}>{side}</button>)}
      </div>
      {photoChoice === 'L' && <>
        <p className="photo-choice-message" role="status">Not this one. Try the other frame. 🌸</p>
        <EvidenceSlot src="assets/final/wrong-choice.jpg" label="Wrong photo · Badi forehead wali malkin" alt="Placeholder for the wrong photo choice" />
      </>}
      {photoChoice === 'R' && <>
        {/* Add the correct edited photo at public/assets/final/together-edited.jpg */}
        {room.image && <EvidenceSlot src={room.image} label="The edited photo · thu thu thu... nazar na lage" alt="The edited photo of both friends" />}
        <button className="button button-primary" onClick={accept}>KEEP THIS MEMORY <span>→</span></button>
      </>}
    </div>}

    {room.kind === 'memory-recall' && !showSuccess && <div className="recall-puzzle">
      <p className="puzzle-instruction">Select the four real discoveries. Decoys are included because Aman made this quiz.</p>
      <div className="memory-choices">{memoryOptions.map((item) => <button key={item} className={`memory-choice ${recallSelection.includes(item) ? 'selected' : ''}`} aria-pressed={recallSelection.includes(item)} onClick={() => setRecallSelection(recallSelection.includes(item) ? recallSelection.filter((value) => value !== item) : [...recallSelection, item])}>{item}</button>)}</div>
      <PuzzleActions onHint={revealHint} hintCount={hintCount} hint={room.hints?.[hintCount - 1]} showHint={showHint} wrongMessage={wrongMessage} attempts={attempts} onCheck={submitRecall} checkDisabled={recallSelection.length !== memoryKey.length} />
    </div>}

    {room.kind === 'finale' && !showSuccess && <button className="button button-primary" onClick={accept}>CLOSE THE CASE <span>✳</span></button>}
    {showSuccess && room.success && <div className="success-box" role="status"><span className="success-mark">✓</span><p>{room.success}</p></div>}
    {room.kind === 'finale' && showSuccess && <div className="finale-content">
      {room.finalMessage && <p className="finale-message">{room.finalMessage}</p>}
      <div className="finale-gallery" aria-label="Birthday memories">
        {room.gallery?.map(({ image, caption }, index) => <EvidenceSlot key={image} src={image} label={caption} alt={`Birthday memory ${index + 1}`} />)}
      </div>
      {room.closingImage && <section className="finale-closing-memory">
        {room.closingImageBefore && <p className="finale-closing-copy">{room.closingImageBefore}</p>}
        <EvidenceSlot src={room.closingImage} label={room.closingImageCaption ?? 'A final memory'} alt="One last birthday memory" />
        {room.closingImageAfter && <p className="finale-closing-copy">{room.closingImageAfter}</p>}
      </section>}
      {room.video && <section className="finale-video-section"><p className="finale-video-caption">And one last thing, just for you…</p><FinaleVideo src={room.video} /></section>}
    </div>}
  </article>
}

function FinaleVideo({ src }: { src: string }) {
  const [available, setAvailable] = useState(true)
  return <div className="finale-video-frame">
    {available ? <video controls preload="metadata" onError={() => setAvailable(false)} aria-label="A birthday message video"><source src={`./${src}`} type="video/mp4" />Your browser cannot play this video.</video> : <div className="evidence-placeholder"><span>▶</span><strong>VIDEO SLOT</strong><small>Add: public/{src}</small></div>}
  </div>
}

type FormProps = { room: Room; answer: string; setAnswer: (answer: string) => void; submit: (event: FormEvent) => void; attempts: number; wrongMessage: string; revealHint: () => void; hintCount: number; showHint: boolean }
function PuzzleForm({ room, answer, setAnswer, submit, attempts, wrongMessage, revealHint, hintCount, showHint }: FormProps) {
  return <>
    <form className="answer-form" onSubmit={submit}>
      <label htmlFor={`answer-${room.id}`}>{room.prompt}</label>
      <div className="answer-row"><input id={`answer-${room.id}`} value={answer} onChange={(event) => setAnswer(event.target.value)} autoComplete="off" placeholder="Type your answer…" /><button className="button button-primary">UNLOCK</button></div>
    </form>
    <PuzzleActions onHint={revealHint} hintCount={hintCount} hint={room.hints?.[hintCount - 1]} showHint={showHint} wrongMessage={wrongMessage} attempts={attempts} />
  </>
}

type ActionsProps = { onHint: () => void; hintCount: number; hint?: string; showHint: boolean; wrongMessage: string; attempts: number; onCheck?: () => void; checkDisabled?: boolean }
function PuzzleActions({ onHint, hintCount, hint, showHint, wrongMessage, attempts, onCheck, checkDisabled }: ActionsProps) {
  return <>
    <div className="puzzle-controls"><button className="text-button" onClick={onHint} disabled={hintCount >= 3}>Need a hint?</button>{attempts > 0 && <span>{attempts} attempt{attempts === 1 ? '' : 's'} · unlimited, obviously</span>}</div>
    {showHint && hint && <p className="feedback feedback-hint" role="status">{hint}</p>}
    {wrongMessage && <p className="feedback feedback-wrong" role="status">{wrongMessage}</p>}
    {onCheck && <button className="button button-primary puzzle-submit" onClick={onCheck} disabled={checkDisabled}>CHECK ANSWER</button>}
  </>
}
