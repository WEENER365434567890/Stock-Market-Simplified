import React, { useState, useRef } from "react";
import { Button, Tooltip, Overlay } from "react-bootstrap";

function TechnicalIndicators() {
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
    </div>
  );
}

export default TechnicalIndicators;
