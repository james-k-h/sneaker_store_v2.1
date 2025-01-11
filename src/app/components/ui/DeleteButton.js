import { useState } from 'react';

const DeleteButton = ({ label, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center ">
        <div className=" bg-white p-4 rounded-lg ">
          <div>Are you sure you want to delete?</div>
          <div className="flex gap-2 mt-1">
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="text-black"
            >
              Cancel
            </button>
            <button
              type="button"
              className="primary"
              onClick={() => {
                onDelete();
                setShowConfirm(false);
              }}
            >
              Yes,&nbsp;Delete!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShowConfirm(true)}
      className="text-black"
    >
      {label}
    </button>
  );
};
export default DeleteButton;
