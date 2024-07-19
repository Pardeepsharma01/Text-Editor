import React from "react";
import { useState, useRef } from "react";

const Text = () => {
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState(16);
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");

  // History management
  const history = useRef([{ text: "" }]); // Store history
  const index = useRef(0); // Track current index

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Update history
    if (index.current < history.current.length - 1) {
      history.current.splice(index.current + 1);
    }
    history.current.push({ text: newText });
    index.current++;
  };

  const undo = () => {
    if (index.current > 0) {
      index.current--;
      setText(history.current[index.current].text);
    }
  };

  const redo = () => {
    if (index.current < history.current.length - 1) {
      index.current++;
      setText(history.current[index.current].text);
    }
  };

  return (
    <div>
      <div className=" w-25 p-3 d-flex top-button mt-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={undo}
          disabled={index.current === 0}
        >
          UNDO
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={redo}
          disabled={index.current >= history.current.length - 1}
        >
          REDO
        </button>
       


      </div>
      <div className=" d-flex">
        <div className=" w-75 box-h">
          <textarea
            className="  text-area "
            placeholder="Add Text Here"
            value={text}
            onChange={handleTextChange}
            style={{
              fontFamily: font,
              fontSize: `${size}px`,
              color: color,
            }}
          ></textarea>
        </div>

        <div className=" w-50 main-box">
          <div className=" font-box">
          <label className="form-label fs-3 fw-bolder">Font</label>
          <select
            className="form-select"
            value={font}
            onChange={handleFontChange}
          >
            <option value="Arial">Arial</option>
    <option value="Times New Roman">Times New Roman</option>
    <option value="Courier New">Courier New</option>
    <option value="Georgia">Georgia</option>
    <option value="Verdana">Verdana</option>
    <option value="Trebuchet MS">Trebuchet MS</option>
    <option value="Comic Sans MS">Comic Sans MS</option>
    <option value="Impact">Impact</option>
    <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
    <option value="Tahoma">Tahoma</option>
    <option value="Palatino Linotype">Palatino Linotype</option>
    <option value="Garamond">Garamond</option>
    <option value="Bookman">Bookman</option>
    <option value="Arial Black">Arial Black</option>
    <option value="Century Gothic">Century Gothic</option>
    <option value="Lucida Console">Lucida Console</option>
    <option value="Gill Sans">Gill Sans</option>
    <option value="Futura">Futura</option>
    <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
    <option value="Brush Script MT">Brush Script MT</option>
    <option value="Arial Narrow">Arial Narrow</option>
    <option value="Century Schoolbook">Century Schoolbook</option>
    <option value="Copperplate">Copperplate</option>
    <option value="Didot">Didot</option>
    <option value="Rockwell">Rockwell</option>
    <option value="Goudy Old Style">Goudy Old Style</option>
    <option value="Gill Sans MT">Gill Sans MT</option>
    <option value="Lucida Bright">Lucida Bright</option>
    <option value="Perpetua">Perpetua</option>
    <option value="Courier">Courier</option>
    <option value="Big Caslon">Big Caslon</option>
    <option value="Optima">Optima</option>
    <option value="Bodoni MT">Bodoni MT</option>
          </select>
          </div>
          <div className=" d-flex size-box">
            <div className="mb-3 ">
              <label className="form-label fs-3 fw-bolder">Size</label>
              <input
                type="number"
                className="form-control"
                value={size}
                onChange={handleSizeChange} // Update size state on change
                min="1"
              />
            </div>

            <div className="mb-3 ">
              <label className="form-label fs-3 fw-bolder">Color</label>
              <input
                type="color"
                className="form-control form-control-color"
                value={color}
                onChange={handleColorChange}
              />
            </div>
          </div>
          <div className=" a-box">
            <button className="btn btn-danger">Add Text</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
