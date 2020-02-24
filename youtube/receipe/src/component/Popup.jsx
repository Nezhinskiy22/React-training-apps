import React from "react";

const Popup = ({ selected, closePopup }) => {
  return (
    <div>
      <section className="popup">
        <div className="content">
          <h2>
            {selected.Title} <span>{selected.Year}</span>{" "}
          </h2>
          <p className="raiting">Rating:{selected.imdbRaiting}</p>
          <div className="plot">
            <img src="{selected.Poster}" />
            <p>{selected.Plot}</p>
          </div>
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Popup;
