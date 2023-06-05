import { styled } from "@stitches/react";

export const FaqSectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 2.5rem',
  padding: '6.25rem 3rem',
  
  'h1': {
    color: '#000000',
    marginBottom: '3.75rem'
  },
})

export const IconButton = styled('button', {
  borderRadius: '1.56rem',
  lineHeight: 0,
  backgroundColor: '#0B0C0E',
  color: '#FFFFFF',
  fontWeight: 'bolder',
  fontSize: '1.5rem',
  padding: '0.5rem',
  width: '4.375rem',
  border: 0,
})

export const FaqItem = styled('div', {
  borderTop: '1px solid #BBBBBB',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 2.5rem',
  padding: '3.437rem 0',

  'div': {
    maxWidth: '16rem',
    maxHeight: '9.625rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },

  'p': {
    maxWidth: '38rem',
    color: '#000000',
    fontSize: '1.25rem'
  }
})

export const FaqHero = styled('div', {
  marginTop: '6.25rem',
  borderRadius: '2.437rem',
})