import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Oswald, Anton, Playfair_Display } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });
const anton = Anton({ subsets: ['latin'], weight: '400' });
const palyfair = Playfair_Display({ subsets: ['latin'], weight: '600' });

const styles = {
  fontSize: '25px',
  fontWeight: '300',
};

function Text({ str }: { str: string }) {
  return <p style={styles}>{str}</p>;
}

export default function Home() {
  return (
    <div>
      <main
        className={`flex min-h-screen flex-col items-center p-8 ${oswald.className}`}
        style={{
          backgroundColor: 'hsla(30.96774194,79.48717949%,92.35294118%,1)',
          color: '#fa5537',
        }}
      >
        <Container style={{ maxWidth: '1200px' }}>
          <Grid container spacing={2} style={{ marginBottom: 40 }}>
            <Grid item xs={6}>
              <p
                className={`${anton.className}`}
                style={{
                  fontSize: '37px',
                  lineHeight: '51px',
                }}
              >
                All Day Financial Services
              </p>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{ textAlign: 'right', width: '100%', color: '#fa5537' }}
              >
                <button
                  className="book-now-button"
                  style={{
                    border: '1px solid',
                    padding: '10px',
                    borderRadius: '35px',
                  }}
                >
                  Book an Appointment
                </button>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Image
                // src="/headshot-victoria.jpg"
                src="/family-square.png"
                alt="family"
                width={500}
                height={1000}
                priority
              />
            </Grid>
            <Grid item xs={5}>
              <div style={{ textAlign: 'center' }}>
                <p
                  className={`${anton.className}`}
                  style={{
                    fontSize: '72px',
                    lineHeight: '46px',
                    marginBottom: '20px',
                    marginTop: 13,
                  }}
                >
                  Services
                </p>
                <Text str={'Annuities'} />
                <Text str={'Mortgage Protection'} />
                <Text str={'Final Expense Insurance'} />
                <Text str={'Life Insurance'} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
