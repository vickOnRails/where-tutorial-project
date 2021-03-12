import Head from "next/head";
import { InfoCardsGrid, Layout } from "../../components";

export default function Home() {
  return (
    <Layout>
      <InfoCardsGrid cards={["", "", ""]} />
    </Layout>
  );
}
