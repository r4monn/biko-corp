import { styled } from "@stitches/react";

export const FooterContainer = styled('footer', {
  backgroundColor: '#F1F1F1',
  padding: '3.75rem',
  margin: '0 3.75rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  borderRadius: '2.18rem',

  'div': {
    marginRight: 'auto'
  },

  'ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    listStyle: 'none',
    marginLeft: '4.6rem',
    
    'li': {
      color: '#59607C',
      cursor: 'pointer',
    }
  },
})

export const LastFooter = styled('footer', {
  backgroundColor: '#F1F1F1',
  padding: '2.5rem 3.75rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '3.125rem 3.75rem',
  borderRadius: '2.18rem',

  'p': {
    color: '#59607C',
  },
})