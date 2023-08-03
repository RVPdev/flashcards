import React from "react";

function CardForm({handleSubmit, handleClick, handleChange, form}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          name="front"
          placeholder="Front side of card"
          className="form-control"
          value={form.front}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Front</label>
        <textarea
          id="back"
          name="back"
          placeholder="Back side of card"
          className="form-control"
          value={form.back}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="" className="btn btn-secondary" onClick={handleClick}>
          Done
        </button>
        <button type="submit" className="btn btn-primary ml-3">
          Save
        </button>
      </div>
    </form>
  );
}

export default CardForm;
