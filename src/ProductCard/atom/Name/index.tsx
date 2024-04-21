import { clsx } from 'clsx';
import { baseStyle } from './style.css.ts';
import type { WithClassName } from '../../../types.ts';

type Props = {
  text: string;
};

const Name = ({ text, className }: WithClassName<Props>) => {
  return <div className={clsx(baseStyle, className)}>{text}</div>;
};

export { Name };
