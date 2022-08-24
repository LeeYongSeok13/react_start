import TopBanner from "../pages/TopBanner";
import List from "../pages/ListTest";
import './basic.css';
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  //console.log(data[0].id)

  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>).slice(0, 10)
      }
    </div>
  )
}

export default App;