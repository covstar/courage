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
        <marquee >Here's to an amazing personality</marquee>
      </div>

      <div className='main_container'>

        <div className='profile_container'>
          <img src={princessImg} alt='Princess' />
          <h1>Princess Chinelo Noble</h1>
        </div>

        <div className='quote_container'>
          <div className='quote_img'>
            <img src={`${image || fallbackImg}`} alt='happy' />
          </div>

          <div className='quote'>
            <TypeAnimation
              key={quote} // Add key prop here
              sequence={[
                quote, // Use quote directly
                1000, // Waits 1s
              ]}
              wrapper="span"
              cursor={true}
              speed={30}
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
              Change
            </Button>
            </div>
          </div>

        </div>


      </div>

    </div>
  </>;
}

export default App;
