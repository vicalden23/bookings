import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Oswald, Anton, Playfair_Display } from 'next/font/google';

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

function Button({
  label,
  marginTop,
  handleOpenCalendar,
}: {
  label: string;
  marginTop?: string;
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
        ...(marginTop && { marginTop: marginTop }),
      }}
      onClick={handleOpenCalendar}
    >
      {label}
    </button>
  );
}

export default function IndividualPage({
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
    <div>
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
              handleOpenCalendar={handleOpenCalendar}
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
              opt={{ marginBottom: '15%' }}
            />
            <Button
              handleOpenCalendar={handleOpenCalendar}
              label="LEARN MORE"
            />
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
            str={`My name is ${agentName} and I specialize in helping individuals manage 
                      their financial risks, ensuring they are prepared 
                      for any uncertainties that life may bring. With a focus on 
                      creating secure and steady income streams, I aim to provide 
                      peace of mind and financial stability for my clients.
                      Whether it's through strategic planning or personalized 
                      advice, I am dedicated to guiding you towards a secure financial 
                      future.
                    `}
          />
          <Button
            handleOpenCalendar={handleOpenCalendar}
            label="WORK WITH ME"
            marginTop="20px"
          />
        </Grid>
        <Grid item xs={5}>
          <Image
            src={headshotPath}
            alt="family"
            width={500}
            height={400}
            priority
            style={{ margin: 'auto', marginTop: '10px' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
