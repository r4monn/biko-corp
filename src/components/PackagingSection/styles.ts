import { styled } from "@stitches/react";

export const PackagingSectionContainer = styled('div', {
  paddingBottom: '9.375rem',
  padding: '0 3rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Informations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '3.25rem',
  justifyContent: 'center',

  'header': {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.375rem',
    alignItems: 'center',

    'span': {
      fontSize: '1.25rem',
      color: 'black',
    },

    'h5': {
      fontSize: '1.5rem',
      lineHeight: 0,
    }
  },
  
  'p': {
      maxWidth: '10rem',
      color: '#000000',
    }
})

export const Actions = styled('div', {
  width: '46.875rem',
  margin: '9.375rem 0',

  'h1': {
    color: '#000000',
  },

  'p': {
    maxWidth: '38rem',
    color: '#000000',
    fontSize: '1.25rem',
    margin: '3.687rem 0',
    textAlign: 'center'
  },

  'footer': {
    display: 'flex',
    gap: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const Divisor = styled('div', {
  height: '4rem',
  borderLeft: '1px solid #BBBBBB'
})