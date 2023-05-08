import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Questions() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=25"
      );

      console.log(response);
      // After fetching data stored it in posts state.
      setQuestions(response.data.results);
      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadQuestions();
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <h4>Loading Questions...</h4>
        ) : (
          questions.map((data) => (
            // Presently we only fetch
            // title from the API
            <h4>{data.question}</h4>
          ))
        )}
      </div>
    </>
  );
}
