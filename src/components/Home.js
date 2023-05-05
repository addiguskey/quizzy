import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const styles = {
  card: {
    color: "#E4E1DC !important",
  },
  title: {
    fontWeight: 800,
    fontSize: "4rem",
    color: "#d0cfcc !important",
  },
  btn: {
    textDecoration: "none",
    backgrondColor: "#255036",
  },
};
export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="card text-center bg-light" id="card">
          <p className="card-text mt-5 pt-5" style={styles.title}>
            but really, <br></br>are you good at trivia?
          </p>
          <div className="text-center">
            <button id="start-button" className="btn btn-md" style={styles.btn}>
              let's find out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
