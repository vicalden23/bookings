import Image from 'next/image';
import { Container } from '@mui/material';
import { anton, StickyButton, Text } from '@/components/Shared';

export default function HomeMobile({
  headshotPath,
  agentName,
  calendarLink,
}: {
  headshotPath: string;
  agentName: string;
  calendarLink: string;
}) {
  const handleOpenCalendar = () => {
    window.location.href = calendarLink;
  };

  return (
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
        str={`My name is ${agentName} and I specialize in helping individuals manage 
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
  );
}
