import Link from "next/link";

const InfoCard = ({ title, subtitle, chip, description }) => {
  return (
    <article className="info-card">
      <Link href="/states/state">
        <a className="info-card__link">
          <h2 className="info-card__heading">
            {title}{" "}
            {subtitle && (
              <small className="info-card__heading--small">- {subtitle}</small>
            )}
          </h2>
          <p className="info-card__desc">{description}</p>
          {chip && <span className="info-card__chip">{chip}</span>}
        </a>
      </Link>
    </article>
  );
};

const InfoCardsGrid = ({ data }) => {
  return (
    <section className="cards-container">
      {data.map((dataItem) => {
        const { name, postalCode, description, capital } = dataItem;
        return (
          <InfoCard
            key={dataItem.id}
            data={dataItem}
            title={name}
            subtitle={capital}
            description={description}
            chip={postalCode}
          />
        );
      })}
    </section>
  );
};

export { InfoCard, InfoCardsGrid };
