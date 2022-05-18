import React from "react";
import WorksCard from "./WorksCard";
import copyWriting from "./copyWriting";

const HowItWorks = () => {
  return (
    <>
      <section className="works">
        <div className="container">
          <div className="heading">
            <h1 style={{color:"white"}}>How it Works</h1>
          </div>

          <div className="content grid">
            {copyWriting.map((value, index) => {
              return (
                <WorksCard
                  key={index}
                  cover={value.cover}
                  title={value.title}
                  desc={value.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
