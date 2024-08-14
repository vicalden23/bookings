import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { oswald, vicCalendly } from '@/components/Shared';
import IndividualPageMobile from '@/components/IndividualPageMobile';

export default function Victoria() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
      <main
        className={`flex min-h-screen flex-col items-center ${oswald.className}`}
        style={{
          backgroundColor: 'hsla(30.96774194,79.48717949%,92.35294118%,1)',
          color: '#fa5537',
          paddingTop: isMobile ? 16 : '2rem',
        }}
      >
        <Container style={{ maxWidth: '1200px' }}>
          {isMobile ? (
            <IndividualPageMobile
              headshotPath="/headshot-victoria.jpg"
              calendarLink={vicCalendly}
              agentName="Victoria Alden"
            />
          ) : (
            <IndividualPageMobile
              headshotPath="/headshot-victoria.jpg"
              calendarLink={vicCalendly}
              agentName="Victoria Alden"
            />
          )}
        </Container>
      </main>
    </div>
  );
}
