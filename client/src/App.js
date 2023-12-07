import "./App.css";
import { cards } from "./data/data";
import { Card } from "./components/card";

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      {cards.map((card) => (
        <Card title={card.title} body={card.body} />
      ))}
    </div>
  );
}

export default App;
