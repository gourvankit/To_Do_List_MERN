import React from "react";

const Fetch = () => {
  const dummyData = [
    { task: "HTML I", done: true },
    { task: "CSS", done: true },
    { task: "Responsive design", done: true },
    { task: "Git", done: true },
    { task: "JavaScript I", done: true },
    { task: "JavaScript II", done: false },
  ];
  return dummyData.map((d) => (
    <div className="tasks">
      <span className="textElement">{d.task}</span>
    </div>
  ));
};

export default Fetch;
