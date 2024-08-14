import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  oswald,
  anton,
  Text,
  Button,
  ImageSquare,
  vicCalendly,
  briCalendly,
} from '@/components/Shared';
import HomeMobile from '@/components/HomeMobile';

export default function Home() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleOpenVicCalendar = () => {
    window.location.href = vicCalendly;
  };

  const handleOpenBriCalendar = () => {
    window.location.href = briCalendly;
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

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
            <HomeMobile headshotUrl="/headshot-victoria.jpg" />
          ) : (
            <>
              <Grid container spacing={2} style={{ marginBottom: 30 }}>
                <Grid item xs={6}>
                  <p
                    className={`${anton.className}`}
                    style={{
                      fontSize: '37px',
                      lineHeight: '51px',
                    }}
                  >
                    All Day Services
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      textAlign: 'right',
                      width: '100%',
                      color: '#fa5537',
                    }}
                  >
                    <Button
                      handleOpenCalendar={handleScrollToBottom}
                      label="BOOK AN APPOINTMENT"
                    />
                  </div>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Image
                    src="/family-portrait.png"
                    alt="family"
                    width={800}
                    height={1000}
                    priority
                  />
                </Grid>
                <Grid item xs={5}>
                  <div style={{ textAlign: 'center' }}>
                    <p
                      className={`${anton.className}`}
                      style={{
                        fontSize: '82px',
                        lineHeight: '81px',
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
                      styles={{ marginBottom: '15%' }}
                    />
                    <Button
                      handleOpenCalendar={handleScrollToBottom}
                      label="LEARN MORE"
                    />
                  </div>
                </Grid>
              </Grid>

              <p
                className={`${anton.className}`}
                style={{
                  fontSize: '35px',
                  lineHeight: '60px',
                  marginBottom: '10px',
                  marginTop: 13,
                }}
              >
                About Us
              </p>
              <Text
                str={`We specialize in helping individuals manage 
                  their financial risks, ensuring they are prepared 
                  for any uncertainties that life may bring. With a focus on 
                  creating secure and steady income streams, we aim to provide 
                  peace of mind and financial stability for our clients.
                  Whether it's through strategic planning or personalized 
                  advice, we are dedicated to guiding you towards a secure financial 
                  future.
                `}
              />

              <Grid
                container
                spacing={2}
                style={{
                  marginTop: '50px',
                  marginBottom: '100px',
                  textAlign: 'center',
                }}
              >
                <Grid item xs={6}>
                  <ImageSquare source="/headshot-bri-square-1.png" />
                  <Button
                    handleOpenCalendar={handleOpenBriCalendar}
                    label="WORK WITH BRIAN"
                    styles={{ marginTop: '20px', width: '355px' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ImageSquare source="/headshot-victoria-square.png" />
                  <Button
                    handleOpenCalendar={handleOpenVicCalendar}
                    label="WORK WITH VICTORIA"
                    styles={{ marginTop: '20px', width: '355px' }}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </main>
    </div>
  );
}
