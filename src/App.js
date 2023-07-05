import axios from "axios";
import { useState, useEffect } from "react";

import { HeaderComponent } from "./components/Header/Header";
import { List } from "./components/List/ListItem";
import { ModalItem } from "./components/ModalItem/ModalItem";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const [data, setData] = useState(null);
  const [activeModal, setActiveModal] = useState(false);
  const [selected, setselected] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  function handleClick(product) {
    setselected(product);
    setActiveModal(!activeModal);
  }

  return (
    <>
      <HeaderComponent />
      <List items={data} handleClick={handleClick} />
      <ModalItem items={data} active={activeModal} handleClick={handleClick} />
    </>
  );
}

export default App;
