import React, { useState } from "react";
import { NavContainer, DropDawn, Mode } from "../styeled";
import book from "../../images/book.svg";
import moon from "../../images/moon.svg";
import arrow from "../../images/arrow.svg";
import moonTwo from "../../images/moonTwo.svg";

function Navbar({ setFont, font, mode, setMode }) {
  const [show, setShow] = useState(false);

  return (
    <NavContainer>
      <div>
        <img src={book} alt="" />
      </div>
      <div className="modeSite">
        <DropDawn show={show} mode={mode}>
          <p
            onClick={() => {
              setShow(!show);
            }}
          >
            <span>{font === "san" ? "san serif" : font}</span>
            <span>
              <img src={arrow} alt="" />
            </span>
          </p>
          <div className="fonts">
            <div
              onClick={() => {
                setFont("san");
                setShow(!show);
                localStorage.setItem("fonts", JSON.stringify("san"));
              }}
              className="san"
            >
              Sans Serif
            </div>
            <div
              onClick={() => {
                setFont("serif");
                setShow(!show);
                localStorage.setItem("fonts", JSON.stringify("serif"));
              }}
              className="serif"
            >
              Serif
            </div>
            <div
              onClick={() => {
                setFont("mono");
                setShow(!show);
                localStorage.setItem("fonts", JSON.stringify("mono"));
              }}
              className="mono"
            >
              Mono
            </div>
          </div>
        </DropDawn>
        <hr />
        <div className="toChange">
          <Mode
            mode={mode}
            onClick={() => {
              setMode(!mode);
              localStorage.setItem("mode", JSON.stringify(!mode));
            }}
          >
            <div></div>
          </Mode>
          <img src={mode ? moonTwo : moon} alt="" />
        </div>
      </div>
    </NavContainer>
  );
}

export default Navbar;
