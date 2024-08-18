import { memo } from 'react';
import { getRandomValue, joinStringArrays } from '@/utils';

type Color = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange'
const COLORS: Color[] = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const style = {
  pin: ['absolute', 'rounded-full', '-top-3'],
  pinHead: {
    size: ['w-5', 'h-5'],
    left: ['left-1/2', 'ml-2', 'shadow-[-4px_4px_5px_rgba(0,0,0,0.5)]'],
    right: ['right-1/2', 'mr-2', 'shadow-[4px_4px_5px_rgba(0,0,0,0.5)]'],
    getColor: (color: Color) => [`bg-${color}-500`],
  },
  pinBody: {
    size: ['w-7', 'h-7'],
    left: ['bg-gradient-to-tr', 'left-1/2', 'shadow-[-2px_4px_5px_rgba(0,0,0,0.5)]'],
    right: ['bg-gradient-to-tl', 'right-1/2', 'shadow-[2px_4px_5px_rgba(0,0,0,0.5)]'],
    getColor: (color: Color) => [`from-${color}-600`, `to-${color}-800`],
  },
};

export interface PinProps {
  tilt?: 'left' | 'right';
}

const PinRaw = ({ tilt = 'left' }: PinProps) => {
  const color = getRandomValue(COLORS);
  const getClassNames = (el: 'pinBody' | 'pinHead') => 
    joinStringArrays(style.pin, style[el].size, style[el][tilt], style[el].getColor(color));
  return (
    <>
      <div className={getClassNames('pinBody')}></div>
      <div className={getClassNames('pinHead')}></div>
    </>
  );
}

export const Pin = memo(PinRaw);
