import { memo } from "react";

type Color = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';

const COLORS: Color[] = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const classNames = {
  red: {
    left: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-red-600 to-red-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-red-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
    },
    right: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tl from-red-600 to-red-800 shadow-[2px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-red-500 shadow-[4px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3 mr-2',
    }
  },
  blue: {
    left: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-blue-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-blue-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
    },
    right: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tl from-blue-600 to-blue-800 shadow-[2px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-blue-500 shadow-[4px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3 mr-2',
    }
  },
  yellow: {
    left: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-yellow-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
    },
    right: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tl from-yellow-600 to-yellow-800 shadow-[2px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-yellow-500 shadow-[4px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3 mr-2',
    }
  },
  green: {
    left: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-green-600 to-green-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-green-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
    },
    right: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tl from-green-600 to-green-800 shadow-[2px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-green-500 shadow-[4px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3 mr-2',
    }
  },
  purple: {
    left: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-purple-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-purple-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
    },
    right: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tl from-purple-600 to-purple-800 shadow-[2px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-purple-500 shadow-[4px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3 mr-2',
    }
  },
  orange: {
    left: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-orange-600 to-orange-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-orange-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
    },
    right: {
      base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tl from-orange-600 to-orange-800 shadow-[2px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3',
      head: 'absolute w-5 h-5 rounded-full bg-orange-500 shadow-[4px_4px_5px_rgba(0,0,0,0.5)] right-1/2 -top-3 mr-2',
    }
  }
};

export interface PinProps {
  tilt?: 'left' | 'right';
}

const PinRaw = ({ tilt = 'left' }: PinProps) => {
  const colorIndex = Math.floor(Math.random() * COLORS.length);
  const pinClassName = classNames[COLORS[colorIndex]][tilt];
  return (
    <>
      <div className={pinClassName.base}></div>
      <div className={pinClassName.head}></div>
    </>
  );
}

export const Pin = memo(PinRaw);
