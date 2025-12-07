import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { TodoItems } from './MyComponents/TodoItems';

function App() {
  let todo = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy food items1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes2"
    },
    {
      sno: 3,
      title: "Go to the school",
      desc: "You need to go to the school to meet your friends3"
    }
  ];

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos todo={todo} />
      <Footer />
    </>
  );
}

export default App;