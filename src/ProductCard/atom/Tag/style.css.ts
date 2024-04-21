import { style } from '@vanilla-extract/css';

const baseStyle = style({
  flex: '1 1 1',
  padding: '2px 8px 4px',
  borderRadius: '4px',
  backgroundColor: '#f4f4f4',
  fontWeight: 500,
  fontSize: '12px',
  color: '#666',
  lineHeight: '16px',
});

const kurlyOnlyColorStyle = style({
  color: '#5f0080',
});

export { baseStyle, kurlyOnlyColorStyle };
