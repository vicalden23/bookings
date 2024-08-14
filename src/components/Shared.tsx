import Image from 'next/image';
import { Oswald, Anton } from 'next/font/google';

export const oswald = Oswald({ subsets: ['latin'] });
export const anton = Anton({ subsets: ['latin'], weight: '400' });
export const vicCalendly =
  'https://calendly.com/valden-wilshiregfs/15-minute-meeting';
export const briCalendly =
  'https://calendly.com/bdaof-wilshiregfs/book-a-time-with-me';

export function Text({ str, styles }: { str: string; styles?: {} }) {
  return (
    <p style={{ fontSize: '23px', fontWeight: '300', ...styles }}>{str}</p>
  );
}

export function StickyButton({
  label,
  handleOpenCalendar,
}: {
  label: string;
  handleOpenCalendar?: () => void;
}) {
  return (
    <button onClick={handleOpenCalendar} className="book-now-button-sticky">
      {label}
    </button>
  );
}

export function Button({
  label,
  styles,
  handleOpenCalendar,
}: {
  label: string;
  styles?: {};
  handleOpenCalendar: () => void;
}) {
  return (
    <button
      className="book-now-button"
      style={{
        border: '1px solid',
        padding: '10px',
        borderRadius: '35px',
        fontSize: '14px',
        width: '200px',
        letterSpacing: '0.5px',
        ...styles,
      }}
      onClick={handleOpenCalendar}
    >
      {label}
    </button>
  );
}

export function ImageSquare({ source }: { source: string }) {
  return (
    <Image
      src={source}
      alt="headshot"
      width={500}
      height={400}
      priority
      style={{
        margin: 'auto',
        marginTop: '10px',
        borderRadius: '8px',
      }}
    />
  );
}
