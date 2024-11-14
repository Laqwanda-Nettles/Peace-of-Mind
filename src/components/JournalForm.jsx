export default function JournalForm() {
  return (
    <>
      {/* Button to open the modal */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Add Journal Entry
      </button>

      {/* Modal for journal entry form */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">New Journal Entry</h3>

          {/* Journal Entry Form */}
          <form className="py-4" method="dialog">
            {/* Date Input */}
            <label className="block mb-2">
              <span className="text-sm font-semibold">Date:</span>
              <input
                type="date"
                className="input input-bordered w-full mt-1"
                required
              />
            </label>

            {/* Journal Text Entry */}
            <label className="block mb-4">
              <span className="text-sm font-semibold">Journal Entry:</span>
              <textarea
                className="textarea textarea-bordered w-full mt-1"
                placeholder="Write your thoughts here..."
                rows="6"
                required
              ></textarea>
            </label>

            {/* Modal Actions */}
            <div className="modal-action">
              {/* Save Button */}
              <button type="submit" className="btn btn-primary">
                Save Entry
              </button>

              {/* Close Button */}
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
