import { HandwritingText } from '@/components/ui/handwriting-text'

// The traced word is drawn from the same face as the type around it, self-hosted (Latin WOFF from
// Fontsource, SIL OFL) so the outlines match exactly: Anton for display statements, JetBrains Mono
// Italic for technical annotations. Licences: /fonts/OFL-Anton.txt, /fonts/OFL-JetBrainsMono.txt
export const INK_FONTS = {
  display: '/fonts/Anton-Regular-latin.woff',
  code: '/fonts/JetBrainsMono-Italic-latin.woff',
}

/**
 * A word in the site's italic that writes itself, then inks in. The real text stays in
 * the DOM (visually hidden) for screen readers and search; the drawing is decorative.
 * `pending` keeps the space reserved but blank until the word should start writing.
 */
export default function InkWord({ text, font = INK_FONTS.display, pending = false, ...props }) {
  return <>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">
      {pending
        ? <span style={{ opacity: 0 }}>{text}</span>
        : <HandwritingText text={text} fontUrl={font} matchText strokeWidth={0.8} holdFallback={2500} {...props} />}
    </span>
  </>
}
