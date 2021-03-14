import React, { useState, useRef } from "react";
import { Button, Tooltip, Overlay } from "react-bootstrap";

function CommingSoon() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        Technical Indicators
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Comming Decemeber 30
          </Tooltip>
        )}
      </Overlay>

      <Button ref={target} onClick={() => setShow(!show)}>
        Option Tracker
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Comming Early 2021
          </Tooltip>
        )}
      </Overlay>

      <Button ref={target} onClick={() => setShow(!show)}>
        Stock Market Trading Bot
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Comming Early 2021
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

export default CommingSoon;
