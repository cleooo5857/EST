import React, { useState } from "react";

function Challenge1() {
  const [checkedValues, setCheckedValues] = useState(0);
  const [open, isopen] = useState(false);
  const checkList = [
    "HTML & CSS",
    "Bootstrap",
    "JavaScript",
    "Node.js",
    "React JS",
    "MongoDB",
  ];

  // 체크된 값 checkedValues + 1
  const checkValueHandler = (check) => {
    console.log(check);

    setCheckedValues((prev) => (check ? prev + 1 : prev - 1));
  };

  console.log(checkedValues);

  return (
    <div className="checkWrapper">
      {/* 체크박스 0 아닐시 체크된 값 을보여준다. */}
      <div className="checkinner">
        <p>
          {checkedValues !== 0 ? `${checkedValues} selected` : "selected"}
          {open ? (
            <span className={`arrow-prev open`} onClick={() => isopen(false)} />
          ) : (
            <span
              className={`arrow-prev  disble`}
              onClick={() => isopen(true)}
            />
          )}
        </p>

        {/* 화살표 클릭시 체크리스트 드롭다운 */}
        <div className={`chklistWrapper ${open ? "none" : "block"}`}>
          {checkList.map((item, id) => (
            <div className="chklist">
              <input
                type="checkbox"
                id={item}
                onChange={(e) => checkValueHandler(e.target.checked)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenge1;
