import { styled } from "@stitches/react";

export const Heading = styled('h1', {
  variants: {
    size: {
      xs: {
        fontSize: '1.875rem',
        fontWeight: 500,
        color: '#000000',
      },
      sm: {
        fontSize: '2.5rem',
        fontWeight: 500,
        color: '#000000',
      },
      md: {
        fontSize: '3.75rem',
        lineHeight: '4.75rem',
        fontWeight: 500,
        color: '#0B0C0E',
      },
      hg: {
        fontSize: '8rem',
        lineHeight: '7rem',
        fontWeight: 400,
        color: 'white',
      },
    },
    type: {
      bold: {
        fontWeight: 500,
      },
      regular: {
        fontWeight: 400,
      }
    }
  },
})