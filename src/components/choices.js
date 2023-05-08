import { useState, useEffect } from "react";

export default function Choices() {
  const [example, setExample] = useState([]);
  useEffect(() => {
    url();
  }, []);

  const url = async () => {
    const r = await fetch("https://opentdb.com/api.php?amount=10&category=25");
    setExample(await response.json());
  };

  //  for (let i = 0; i < {data.incorrect_answers}.length; i++) {
  //             const element = array[i];

  //         }

  return (
    <div className="choices">
      <div>
        {example.map((data) => {
          return (
            <li
              className="correct_answer"
              key={data.id}
              title={data.correct_answer}
            ></li>
          );
        })}
      </div>
    </div>
  );
}
