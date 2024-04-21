import { WithClassName } from '../../../types.ts';
import { clsx } from 'clsx';
import { baseStyle } from './style.css.ts';
import { Review as ReviewIcon } from '../../../shared/Icons';

type Props = {
  count: number;
};

// TODO: number format 1000 -> 1,000
// TODO: Custom Icon
const ReviewCount = ({ count, className }: WithClassName<Props>) => {
  return (
    <div className={clsx(baseStyle, className)}>
      <ReviewIcon />
      <span>{count}</span>
    </div>
  );
};

export { ReviewCount };
