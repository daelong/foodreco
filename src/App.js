import React from "react";
import Template from "./components/Template";
import QuestionItem from "./components/QuestionItem";

function App() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: "삼겹살",
  //     point: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "자장면",
  //     point: 0,
  //   },
  // ]);

  // useEffect(()=>{

  // },[items])
  return (
    <Template>
      <QuestionItem />
    </Template>
  );
}

export default App;
