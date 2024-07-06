import { useRef, useState } from 'react';
import { quotes } from '../data';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
    setImage(quotes[randomIndex].imageUrl);
  }



  const princessImg = 'https://t.ly/zYP3c';
  const fallbackImg = 'https://t.ly/K1_g4';

  useEffect(() => {
    const animationDuration = quote.length * 50; // Assuming 50ms per character
    const timeoutId = setTimeout(() => {
      getRandomQuote();
    }, animationDuration + 5000); // Add additional time to account for delay or animation end

    return () => {
      clearTimeout(timeoutId);
    };
  }, [quote]);

  return <>
    <div>
      <div className='header'>
      <div className='profile_container'>
        <h1>Princess Chinelo Noble</h1>
        <img src={princessImg} alt='Princess' />
      </div>
        <marquee >Here's to an amazing personality</marquee>
      </div>


      <div className='main_container'>



        <div className='quote_container'>
          <div className='quote_img'>
            <img src={`${image || fallbackImg}`} alt='happy' />
          </div>

          <div className='quote'>
            <TypeAnimation
              key={quote} // Add key prop here
              sequence={[
                quote, // Use quote directly
                2000, // Waits 1s
              ]}
              wrapper="span"
              cursor={true}
              speed={20}
              repeat={Infinity}
              style={{ fontSize: '', display: '' }}
            />

            <div className='btn'>
              <Button
                sx={{
                  display: 'block',
                  bgcolor: '#787775',
                  color: '#ebebeb',
                  '&:hover': {
                    color: '#787775',
                    bgcolor: '#ebebeb'
                  }
                }}
                variant="contained"
                onClick={getRandomQuote}>
                Inspire Me!
              </Button>
            </div>
          </div>

        </div>


      </div>

    </div>
    <div className='footer'>
                <p>Remember That You Are The Best!</p>
    </div>
  </>;
}

export default App;
