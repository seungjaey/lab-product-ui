import type { WithClassName } from '../../../types.ts';
import { clsx } from 'clsx';
import { baseStyle } from './style.css.ts';

type Props = {
  text: string;
};

const DeliveryType = ({ text, className }: WithClassName<Props>) => {
  return <div className={clsx(baseStyle, className)}>{text}</div>;
};

export { DeliveryType };
