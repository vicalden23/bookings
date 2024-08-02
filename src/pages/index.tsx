import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Oswald, Anton, Playfair_Display } from 'next/font/google';

import HomeMobile from '@/components/HomeMobile';

const oswald = Oswald({ subsets: ['latin'] });
const anton = Anton({ subsets: ['latin'], weight: '400' });
const palyfair = Playfair_Display({ subsets: ['latin'], weight: '600' });

const styles = {
  fontSize: '23px',
  fontWeight: '300',
};

function Text({ str, opt }: { str: string; opt?: {} }) {
  return <p style={{ ...styles, ...opt }}>{str}</p>;
}

function Button({ label, marginTop }: { label: string; marginTop?: string }) {
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
        ...(marginTop && { marginTop: marginTop }),
      }}
    >
      {label}
    </button>
  );
}

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');
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
            <HomeMobile />
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
                    <Button label="BOOK AN APPOINTMENT" />
                  </div>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Image
                    // src="/headshot-victoria.jpg"
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
                      opt={{ marginBottom: '15%' }}
                    />
                    <Button label="LEARN MORE" />
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2}
                style={{ marginTop: '50px', marginBottom: '100px' }}
              >
                <Grid item xs={7}>
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
                    // size="16px"
                    str={`My name is Victoria Alden and I specialize in helping individuals manage 
                      their financial risks, ensuring they are prepared 
                      for any uncertainties that life may bring. With a focus on 
                      creating secure and steady income streams, I aim to provide 
                      peace of mind and financial stability for my clients.
                      Whether it's through strategic planning or personalized 
                      advice, I am dedicated to guiding you towards a secure financial 
                      future.
                    `}
                  />
                  <Button label="WORK WITH ME" marginTop="20px" />
                </Grid>
                <Grid item xs={5}>
                  <Image
                    src="/headshot-victoria-square.png"
                    alt="family"
                    width={500}
                    height={400}
                    priority
                    style={{ margin: 'auto', marginTop: '10px' }}
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
