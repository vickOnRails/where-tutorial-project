import Head from "next/head";
import { useRouter } from "next/router";
import { InfoCardsGrid, Layout } from "../../components";
import { url } from "../index";
// import LGAs from "../../data/lgas.json";
import { useEffect, useState } from "react";
import { apiKeys } from "../../util/key";

// FIXME: do something with the head
export default function Home() {
  const router = useRouter();
  const [lgas, setLGAs] = useState([]);
  const [contentLoading, setContentLoading] = useState(false);
  const {
    query: { stateId },
  } = router;

  useEffect(() => {
    const fetchStateLGAs = () => {
      setContentLoading(true);
      fetch(
        `${url}/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states/${stateId}/lgas`,
        {
          headers: {
            "X-Api-Key": apiKeys,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setContentLoading(false);
          setLGAs(res.data);
        });
    };

    fetchStateLGAs();
  }, [stateId]);

  if (contentLoading) return <p>Loading...</p>;
  return (
    <Layout>
      <InfoCardsGrid data={lgas} />
    </Layout>
  );
}
