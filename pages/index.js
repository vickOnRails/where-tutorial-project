import { useEffect, useState } from "react";

import { InfoCardsGrid, Layout, Search } from "../components";
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
      console.log(`Fetching`);
      setContentLoading(true);
      fetch(
        `${url}/countries/f794ecd7-679e-4989-9be6-e081ac2f7145/states?search=${searchKeyword}`,
        {
          headers: {
            "X-Api-key": apiKeys,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setStates(res.data);
          setContentLoading(false);
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
      {contentLoading ? <p>Loading...</p> : <InfoCardsGrid data={states} />}
    </Layout>
  );
}
