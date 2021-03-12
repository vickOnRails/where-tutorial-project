import React from "react";

const InfoCard = () => {
  return (
    <article className="info-card">
      <h2 className="info-card__heading">
        Rivers State{" "}
        <small className="info-card__heading--small">- Port Harcourt</small>
      </h2>
      <p className="info-card__desc">
        Rivers State, also known simply as Rivers, is one of the 36 states of
        Nigeria. According to census data released in. Rivers State, also known
        simply as Rivers, is one of the 36 states of Nigeria. According to
        census data released in.
      </p>
      <span className="info-card__chip">440001</span>
    </article>
  );
};

const InfoCardsGrid = ({ cards }) => (
  <section>
    {cards.map((card, index) => (
      <InfoCard key={index} />
    ))}
  </section>
);

export { InfoCard, InfoCardsGrid };
