import { styled } from '@stitches/react'
import testimonialsImage from '../../assets/testimonials.svg'

export const TestimonialsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: '9.375rem 3rem',
  alignItems: 'center',
  background: `linear-gradient(180deg, rgba(11, 12, 14, 0.78) 17.88%, rgba(11, 12, 14, 0.32) 48.09%, #0B0C0E 100%), url(${testimonialsImage})`,
  backgroundPosition: 'left center',
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
  borderRadius: '3.75rem 3.75rem 0 0',

  'p': {
    marginTop: '4.375rem',
    marginBottom: '2.81rem',
    maxWidth: '38rem',
    fontSize: '1.25rem',
    color: '#F5F5F5',
    textAlign: 'center',
  },
})

export const FeedbacksContainer = styled('section', {
  padding: '0 3rem',
  backgroundColor: '#0B0C0E',
  borderRadius: '0 0 3.75rem 3.75rem',
  paddingBottom: '9.375rem',

  display: 'grid',
  justifyItems: 'center',
  alignItems: 'start',
  gap: '1.875rem',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',

  '> div:nth-child(1)': {
    borderBottom: '3px solid red',
    gridRowStart: 1,
    gridColumnStart: 1,

    gridRowEnd: 2,
    gridColumnEnd: 2,
  },
  '> div:nth-child(2)': {
    borderBottom: '3px solid yellow',
    gridRowStart: 1,
    gridColumnStart: 2,

    gridRowEnd: 3,
    gridColumnEnd: 3,
  },
  '> div:nth-child(3)': {
    borderBottom: '3px solid lime',
    gridRowStart: 1,
    gridColumnStart: 3,

    gridRowEnd: 2,
    gridColumnEnd: 4,
  },
  '> div:nth-child(4)': {
    borderBottom: '3px solid purple',
    gridRowStart: 2,
    gridColumnStart: 1,

    gridRowEnd: 3,
    gridColumnEnd: 2,
  },
  '> div:nth-child(5)': {
    borderBottom: '3px solid orange',
    gridRowStart: 2,
    gridColumnStart: 3,

    gridRowEnd: 3,
    gridColumnEnd: 4,
  },
})