import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Freelancer",
            "Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
