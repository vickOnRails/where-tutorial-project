import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { url } from "../index";
import { InfoCardsGrid, Layout, Spinner } from "../../components";
// import LGAs from "../../data/lgas.json";
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
          setContentLoading(false);
          setLGAs(res.data);
        })
        .catch((err) => {
          alert(`Throwing an error`);
          throw new Error(err.message);
        });
    };

    fetchStateLGAs();
  }, [stateId]);

  return (
    <Layout>
      {contentLoading ? <Spinner /> : <InfoCardsGrid data={lgas} />}
    </Layout>
  );
}
