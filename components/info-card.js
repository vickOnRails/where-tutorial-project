import Link from "next/link";
import { truncate } from "../util/truncate";

const InfoCard = ({ id, title, subtitle, chip, description }) => {
  return (
    <article className="info-card">
      <Link href={`/states/${id}`}>
        <a className="info-card__link">
          <h2 className="info-card__heading">
            {title}{" "}
            {subtitle && (
              <small className="info-card__heading--small">- {subtitle}</small>
            )}
          </h2>
          <p className="info-card__desc">{truncate(description, 150)}</p>
          {chip && <span className="info-card__chip">{chip}</span>}
        </a>
      </Link>
    </article>
  );
};

const InfoCardsGrid = ({ data }) => {
  console.log(data);
  return (
    <section className="cards-container">
      {data.map((dataItem) => {
        const { name, postalCode, description, capital, id } = dataItem;
        return (
          <InfoCard
            key={dataItem.id}
            data={dataItem}
            id={id}
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
