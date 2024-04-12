const classNames = {
  container: 'w-full flex flex-row items-base space-x-2 items-center',
  label: 'text-sm',
  labelHighlighted: 'font-mono text-blue-500',
  labelContainer: 'flex flex-row justify-between',
  progressContainer: 'box-border w-full h-4 rounded-full border border-dashed border-black p-px',
  progressBarL: 'bg-gradient-to-b from-sky-500 to-blue-500 h-full rounded-full border border-transparent',
  progressBarR: 'bg-gradient-to-b from-sky-500 to-blue-500 h-full rounded-full border border-transparent ml-auto',
};

export interface LoadingBarProps {
  leftLabel: string;
  rightLabel: string;
  status?: number;
}

export default function LoadingBar({ leftLabel = '', rightLabel = '', status = 0 }: LoadingBarProps) {
  return (
    <div>
      <div className={classNames.labelContainer}>
        <div className={classNames.label}>
          <span className={classNames.labelHighlighted}>{leftLabel}</span>
        </div>

        <div className={classNames.label}>
          <span>{rightLabel}</span>
        </div>
      </div>
      <div className={classNames.container}>
        <div className={classNames.label}>
            <span className={classNames.labelHighlighted}>{status}%</span>
          </div>
        <div className={classNames.progressContainer}>
          <div className={classNames.progressBarL} style={{ width: `${status}%`}}></div>
        </div>
        <div className={classNames.label}>
          <span>{100 - status}%</span>
        </div>
      </div>
    </div>
  );
}
