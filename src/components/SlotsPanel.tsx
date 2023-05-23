import { formatStartTime } from '../utils';
import './SlotsPanel.css';

export interface SlotsPanelProps {
  startTimes: string[];
}

function SlotsPanel({ startTimes }: SlotsPanelProps) {
  const formattedStartTimes = startTimes.map((startTime) =>
    formatStartTime(startTime)
  );

  return (
    <div className="slots-panel">
      {formattedStartTimes.map((formattedStartTime) => (
        <button key={formattedStartTime} type="button">
          {formattedStartTime}
        </button>
      ))}
    </div>
  );
}

export default SlotsPanel;
