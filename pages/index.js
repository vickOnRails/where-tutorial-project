import { useEffect, useState } from "react";

import { InfoCardsGrid, Layout, Search, Spinner } from "../components";
import { apiKeys } from "../util/key";

// FIXME: Do something with the actual head
export const url = `https://whereapis-africa.herokuapp.com/api`;
export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [contentLoading, setContentLoading] = useState(false);
  const [states, setStates] = useState([]);

  const handleSearchKeywordsChange = (text) => {
    setSearchKeyword(text);
  };

  useEffect(() => {
    const fetchStates = () => {
      setContentLoading(true);
      fetch(
        `${url}/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?search=${searchKeyword}`,
        {
          headers: {
            "X-Api-key": apiKeys,
          },
        }
      )
        .then(async (res) => {
          if (res.status === 492) {
            const errMesage = await res.json();
            throw new Error(errMesage.message);
          }
          return res.json();
        })
        .then((res) => {
          setStates(res.data);
          setContentLoading(false);
        })
        .catch((err) => {
          const error =
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message;

          setContentLoading(false);
          throw new Error(error);
        });
    };
    fetchStates();
  }, [searchKeyword]);

  return (
    <Layout>
      <Search
        searchKeyword={searchKeyword}
        setSearchKeyword={handleSearchKeywordsChange}
      />
      {contentLoading ? <Spinner /> : <InfoCardsGrid data={states} />}
    </Layout>
  );
}
