import Image from 'next/image';
import { Container } from '@mui/material';
import { Anton } from 'next/font/google';
import { vicCalendly, oswald } from './Shared';

const anton = Anton({ subsets: ['latin'], weight: '400' });

const fontStyles = {
  fontSize: '23px',
  fontWeight: '300',
};

function Text({ str, styles }: { str: string; styles?: {} }) {
  return <p style={{ ...fontStyles, ...styles }}>{str}</p>;
}

function StickyButton({
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

export default function HomeMobile({ headshotPath }: { headshotPath: string }) {
  const handleOpenCalendar = () => {
    window.location.href = vicCalendly;
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${oswald.className}`}
      style={{
        backgroundColor: 'hsla(30.96774194,79.48717949%,92.35294118%,1)',
        color: '#fa5537',
        paddingTop: 16,
      }}
    >
      <Container style={{ maxWidth: '1200px', marginBottom: '100px' }}>
        <p
          className={`${anton.className}`}
          style={{
            fontSize: '32px',
            marginBottom: '10px',
          }}
        >
          All Day Services
        </p>

        <Image
          src="/family-portrait.png"
          alt="family"
          width={800}
          height={1000}
          priority
        />

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p
            className={`${anton.className}`}
            style={{
              fontSize: '65px',
              lineHeight: '71px',
              marginBottom: '20px',
              letterSpacing: '3px',
              marginTop: 13,
            }}
          >
            Financial Services
          </p>
          <Text str={'Annuities'} />
          <Text str={'Mortgage Protection'} />
          <Text str={'Final Expense Insurance'} />
          <Text str={'Life Insurance'} />
          <Text str={'Disability Insurance'} />
          <Text
            str={'Critical Illness Insurance'}
            styles={{ marginBottom: '10%' }}
          />
          <StickyButton
            label="BOOK AN APPOINTMENT"
            handleOpenCalendar={handleOpenCalendar}
          />
        </div>

        <p
          className={`${anton.className}`}
          style={{
            fontSize: '35px',
            lineHeight: '60px',
            marginBottom: '10px',
            marginTop: 13,
          }}
        >
          About Me
        </p>

        <Text
          styles={{ fontSize: 16 }}
          str={`My name is Victoria Alden and I specialize in helping individuals manage 
            their financial risks, ensuring they are prepared 
            for any uncertainties that life may bring. With a focus on 
            creating secure and steady income streams, I aim to provide 
            peace of mind and financial stability for my clients.
            Whether it's through strategic planning or personalized 
            advice, I am dedicated to guiding you towards a secure financial 
            future.`}
        />

        <Image
          src={`${headshotPath}`}
          alt="family"
          width={200}
          height={400}
          priority
          style={{ margin: 'auto', marginTop: '10px' }}
        />
      </Container>
    </main>
  );
}
