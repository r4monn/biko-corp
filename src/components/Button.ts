import { styled } from "@stitches/react";

export const Button = styled('button', {
  fontSize: '1.25rem',
  padding: '20px 40px',
  borderRadius: '3rem',
  outline: 'none',
  border: 0,

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '#212121',
        color: '#BBBBBB',
        border: '1px solid #414141',
        textTransform: 'uppercase',

        '&:hover': {
          filter: 'brightness(1.5)',
          transition: 'all 0.3s ease-in-out',
        },
      },
      primary: {
        backgroundColor: '#0B0C0E',
        color: '#FFFFFF',

        '&::after': {
          backgroundColor: 'white',
          borderRadius: '3rem',
          content: '',
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          transform: 'translate(-100%, 0) rotate(10deg)',
          transformOrigin: 'top left',
          transition: '.2s transform ease-out',
          'will-change': 'transform',
          'z-index': -1,
        },

        '&:hover::after': {
          transform: 'translate(0, 0)',
        },

        '&:hover': {
          border: '2px solid white',
          color: 'black',
          transform: 'scale(1.05)',
          'will-change': 'transform',
        }
      },
      secondary: {
        backgroundColor: '#F1F1F1',
        color: '#000000',

        '&::after': {
          backgroundColor: 'black',
          borderRadius: '3rem',
          content: '',
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          transform: 'translate(-100%, 0) rotate(10deg)',
          transformOrigin: 'top left',
          transition: '.2s transform ease-out',
          'will-change': 'transform',
          'z-index': -1,
        },

        '&:hover::after': {
          transform: 'translate(0, 0)',
        },

        '&:hover': {
          border: '2px solid black',
          color: 'white',
          transform: 'scale(1.05)',
          'will-change': 'transform',
        }
      },
    }
  },

  defaultVariants: {
    variant: "default"
  }
})