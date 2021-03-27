import Head from "next/head";
import { InfoCardsGrid, Layout } from "../../components";

import LGAs from "../../data/lgas.json";

export default function Home() {
  return (
    <Layout>
      <InfoCardsGrid data={LGAs} />
    </Layout>
  );
}
