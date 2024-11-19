export default function JournalForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    const content = e.target.content.value;

    try {
      const response = await fetch("/api/add-journal-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, content }),
      });

      if (response.ok) {
        alert("Journal entry added successfully!");
        e.target.reset();
      } else {
        console.error("Error: ", await response.json());
        alert("Failed to add journal entry.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div className="flex justify-center m-5">
      {/* Button to open the modal */}
      <button
        className="btn btn-outline btn-warning text-lg shadow-md shadow-warning hover:scale-105 hover:shadow-lg hover:shadow-warning duration-300"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Add Journal Entry
      </button>

      {/* Modal for journal entry form */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">New Journal Entry</h3>

          {/* Journal Entry Form */}
          <form onSubmit={handleSubmit} className="py-4" method="dialog">
            {/* Date Input */}
            <label className="block mb-2">
              <span className="text-md font-semibold">Date:</span>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full mt-1"
                required
              />
            </label>

            {/* Journal Text Entry */}
            <label className="block mb-4">
              <span className="text-md font-semibold">Journal Entry:</span>
              <textarea
                name="content"
                className="textarea textarea-bordered w-full mt-1 text-lg"
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
    </div>
  );
}
