import { useState } from 'react'

type Props = { src: string; label: string; alt: string }
export default function EvidenceSlot({ src, label, alt }: Props) {
  const [available, setAvailable] = useState(true)
  // Add the real image at the public/assets path supplied by the room's image field.
  return <figure className={`evidence-slot ${available ? '' : 'evidence-missing'}`}>
    {available && <img src={`./${src}`} alt={alt} onError={() => setAvailable(false)} />}
    {!available && <div className="evidence-placeholder"><span>🌸</span><strong>PHOTO SLOT</strong><small>Add: public/{src}</small></div>}
    <figcaption>{label}</figcaption>
  </figure>
}
