import type { WithClassName } from '../../../types.ts';
import { clsx } from 'clsx';
import { baseStyle, kurlyOnlyColorStyle } from './style.css.ts';

// TODO: Tag Type
type Props = {
  type: string;
  name: string;
};

const Tag = ({ type, name, className }: WithClassName<Props>) => {
  const isKurlyOnly = type === 'KURLY_ONLY';
  const kurlyOnlyStyle = isKurlyOnly ? kurlyOnlyColorStyle : '';
  return <span className={clsx(baseStyle, kurlyOnlyStyle, className)}>{name}</span>;
};

export { Tag };
