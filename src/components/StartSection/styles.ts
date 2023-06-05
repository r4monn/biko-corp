import { styled } from '@stitches/react'
import backgroundImage from '../../assets/hero-bike.png'

export const StartSectionContainer = styled('section', {
  height: 'calc(100vh - 90px)',
  background: `url(${backgroundImage}), black`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '4rem 3rem',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',

    'p': {
      fontSize: '1.25rem',
      maxWidth: '45%',
      color: '#BBBBBB',
    }
  }
})

export const Line = styled('div', {
  borderBottom: '0.3px solid #414141',
  lineHeight: 0,
  margin: '2.25rem 0'
})