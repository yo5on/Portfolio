/*
 * Interface icons, drawn as inline SVG so they render identically everywhere.
 * Unicode arrows (↗ → ↑ ×) fall back to colour emoji on some platforms, so they
 * are not used for UI. Icons are decorative: the text beside them carries the meaning.
 */

const base = {
  viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4,
  strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false',
}

export function ArrowUpRight({ className = 'icon' }) {
  return <svg {...base} className={className}><path d="M5 11 11 5M6 5h5v5" /></svg>
}

export function ArrowRight({ className = 'icon' }) {
  return <svg {...base} className={className}><path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" /></svg>
}

export function ArrowUp({ className = 'icon' }) {
  return <svg {...base} className={className}><path d="M8 13V3M4.5 6.5 8 3l3.5 3.5" /></svg>
}

export function Close({ className = 'icon' }) {
  return <svg {...base} className={className}><path d="m4 4 8 8M12 4l-8 8" /></svg>
}

/** The wordmark's four-pointed star: the favicon's star, cropped to its own bounds. */
export function BrandStar({ className = 'brand-star' }) {
  return (
    <svg viewBox="3 3 26 26" className={className} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M16 3C17.3 11.6 20.4 14.7 29 16 20.4 17.3 17.3 20.4 16 29 14.7 20.4 11.6 17.3 3 16 11.6 14.7 14.7 11.6 16 3Z" />
    </svg>
  )
}

/** A link that opens in a new tab: label, external-link icon, and a screen-reader notice. */
export function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight className="icon icon-ext" />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  )
}
