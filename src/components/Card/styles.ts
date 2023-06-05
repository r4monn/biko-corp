import { styled } from "@stitches/react";

export const CardContainer = styled('div', {
  backgroundColor: '#141415',
  borderRadius: '1.31rem',
  padding: '1.875rem',
  maxWidth: '28.31rem',

  'p': {
    fontSize: '1rem',
    color: '#BBBBBB',
    textAlign: 'left',
    marginTop: '1.185rem',
    marginBottom: '2.5rem',
  }
})

export const CardHeader = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  'strong': {
    fontSize: '1.25rem',
    fontStyle: 'bold',
    color: '#FFFFFF'
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.31rem',
    justifyContent: 'space-around',
  }
})

export const Classification = styled('div', {
  marginTop: '-1rem',
  display: 'flex',
  gap: '0.3rem',
})

export const CardFooter = styled('div', {
  display: 'flex',
  gap: '0.65rem',
})