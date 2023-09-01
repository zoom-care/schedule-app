import React, { useState } from 'react';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slot: React.FC<{showMore: boolean, index: number, label: string}> = ({showMore, index, label}) => {
  return (
    <button
      onClick={() => toast(`You've selected ${label} slot.`)}
      className={`text-base p-2 bg-slate-600 text-white font-semibold cursor-pointer rounded ${showMore || index < 5 ? '' : 'hidden'}`}
    >
      {label}
    </button>
  );
}

const Appointments: React.FC<{appointments: string[]}> = ({appointments}) => {
  const [showMore, setShowMore] = useState(false);
  const inputId = uniqid('inputId');

  return (
    <>
      <div className="flex gap-2 mt-1 flex-wrap">
        {
          (appointments || []).map((ap, index) => (
            <Slot label={ap} showMore={showMore} index={index} key={uniqid('appointment')} />
          ))
        }
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          id={inputId}
          className="hidden"
          checked={showMore}
          onChange={() => setShowMore(!showMore)}
        />
        <label htmlFor={inputId} className="bg-transparent text-primary underline decoration-solid cursor-pointer">
          {showMore ? 'Show Less' : 'Show More'}
        </label>
      </div>
      <ToastContainer />
    </>
  );
};

export default Appointments;
