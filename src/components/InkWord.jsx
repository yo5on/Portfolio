import { HandwritingText } from '@/components/ui/handwriting-text'

// The site's own italic (Instrument Serif Italic, OFL; Latin subset), self-hosted so the
// traced word matches the surrounding type exactly. Licence: /fonts/OFL-InstrumentSerif.txt
const FONT = '/fonts/InstrumentSerif-Italic-latin.ttf'

/**
 * A word in the site's italic that writes itself, then inks in. The real text stays in
 * the DOM (visually hidden) for screen readers and search; the drawing is decorative.
 * `pending` keeps the space reserved but blank until the word should start writing.
 */
export default function InkWord({ text, pending = false, ...props }) {
  return <>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">
      {pending
        ? <span style={{ opacity: 0 }}>{text}</span>
        : <HandwritingText text={text} fontUrl={FONT} matchText strokeWidth={0.8} holdFallback={2500} {...props} />}
    </span>
  </>
}
