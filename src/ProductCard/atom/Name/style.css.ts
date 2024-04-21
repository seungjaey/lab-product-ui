import { style } from '@vanilla-extract/css';

const baseStyle = style({
  color: '#333',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: 'normal',
  wordBreak: 'break-all',
  whiteSpace: 'normal',
  // TODO: line clamp
  lineClamp: 2,
  // TODO: deprecated box orient
  boxOrient: 'vertical',
});

export { baseStyle };
