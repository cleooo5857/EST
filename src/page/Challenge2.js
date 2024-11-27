import React from "react";

function Challenge2() {
  return (
    <div className="wrapper">
      <div className="hex_wrapper">
        <div class="hex">
          <div class="hex-inner1">
            <div
              class="hex-inner2"
              style={{ backgroundImage: "url(/images/artist-01.jpg)" }}
            >
              <div className="hover_text">
                <h2>Photographer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <div className="back"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hex_wrapper">
        <div class="hex">
          <div class="hex-inner1">
            <div
              class="hex-inner2"
              style={{ backgroundImage: "url(/images/artist-02.jpg)" }}
            >
              <div className="hover_text">
                <h2>Musician</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <div className="back"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hex_wrapper">
        <div class="hex">
          <div class="hex-inner1">
            <div
              class="hex-inner2"
              style={{ backgroundImage: "url(/images/artist-03.jpg)" }}
            >
              <div className="hover_text">
                <h2>Sculptor</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <div className="back"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge2;
