import Head from "next/head";

import { InfoCardsGrid, Layout } from "../components";
import statesJSON from "../data/states.json";

// FIXME: Do something with the actual head
export default function Home() {
  return (
    <Layout>
      <InfoCardsGrid data={statesJSON} />
    </Layout>
  );
}
