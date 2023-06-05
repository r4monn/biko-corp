import { styled } from "@stitches/react"

export const DifferentialContainer = styled('div', {
  backgroundColor: 'white',
  padding: '9.375rem 3rem',
})

export const DifferentialMenu = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '9.375rem',
  width: '100%',

  'p': {
    color: '#000000',
  }
})

export const MenuDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '754px',
  maxWidth: '24.68rem',
  marginRight: '8.31rem'
})

export const MenuItem = styled('div', {
  maxWidth: '19rem',
  padding: '1.875rem',
  borderLeft: '0.3px solid #BBBBBB',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  'h4': {
    fontWeight: 500,
    fontSize: '1.25rem',
    color: '#000000',
  },

  'img': {
    margin: '22.56rem 0 3.25rem 0',
  },
})

export const Gallery = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', 
  gap: '1.625rem',
  overflow: 'hidden',

  'img': {
    width: '100%',
    objectFit: 'contain',
  },

  '> div:nth-child(1)': {
    display: 'flex',
    gap: '1.625rem',
  },
})