import { styled } from "@stitches/react";

export const StatisticsSectionContainer = styled('section', {
  height: '1423px',
  backgroundColor: 'white',
  padding: '9.375rem 3rem'
})

export const Infos = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8rem',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  'p': {
    fontSize: '1.25rem',
    color: '#0B0C0E',
    maxWidth: '90%',
  }
})

export const Hero = styled('div', {
  marginTop: '12.5rem',
  maxHeight: '46rem',
  display: 'flex',
  gap: '5rem',

  '> div': {
    '&.left': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '50%',
      paddingRight: '5rem',
      alignItems: 'flex-start',

      '> div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }
    },

    '&.right': {
      maxWidth: '50%',
      display: 'flex',

      'img': {
        width: '105%',
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '16px 11px 18px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },

  'p': {
    fontSize: '1.25rem',
    color: '#0B0C0E',
  },
})

export const VerticalLine = styled('div', {
  borderLeft: '0.3px solid #BBBBBB',
  lineHeight: 0,
  margin: '0 5rem'
})