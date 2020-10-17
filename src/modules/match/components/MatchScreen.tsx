import React from "react";
import { Loader, Search } from "../../common/components";
import Gradient from "../../common/components/Gradient";
import { Metric, Colors } from "../../common/styles";
import { User } from "../../types";
import List from "./List";
import Header from "../../common/styles/styles";

type Props = {
  isLoading: boolean;
  people: User[];
};

function MatchScreenContainer({ isLoading, people }: Props) {
  const [data, setData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    setData(people);
  }, [people]);

  const onSearch = React.useCallback((value) => {
    setSearchValue(value);
  }, []);

  const onSubmit = () => {
    if (searchValue === "") {
      return setData(people);
    }


    const filteredData = data.filter((item) => {
      const info = item.info || {};
      const name = info.name || "";

      return name.startsWith(searchValue);
    });

    setData(filteredData);
  };

  if (isLoading) {
    return <Loader />;
  }

  const HeaderComponent = (
    <>
      <Header title="My Matches" />
      <Search value={searchValue} onChange={onSearch} onBlur={onSubmit} />
    </>
  );

  return (
    <Gradient colors={Colors.backgroundGradient} style={{ padding: Metric.md }}>
      <List data={data} header={HeaderComponent} />
    </Gradient>
  );
}

export default MatchScreenContainer;
