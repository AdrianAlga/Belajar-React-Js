import "./App.css";
import HelloWorld from "./HelloWorld";
import Card from "./pages/children";
import Greeting from "./pages/Conditional/Greeting";
import Alert from "./pages/Conditional/Alert";
import Status from "./pages/Conditional/Styling";
import UserRole from "./pages/Conditional/UserRole";
import List from "./pages/List";
import Counter from "./pages/PureComponent/PureComponent";
import Event from "./pages/EventHandler/Event";
import EventObject1 from "./pages/EventHandler/EventObject1";
import EventObject2 from "./pages/EventHandler/EventObject2";
import EventObject3 from "./pages/EventHandler/EventObject3";
import CounterHook from "./pages/HookState/Counter";

function App() {
  const name = "Angga";

  const user = {
    name: "Adrian",
    age: 25,
    hobby: "Coding",
  };

  return (
    <>
      <h2 className="title">Belajar React JS by {name}</h2>
      <HelloWorld />

      <Card>
        <h2 style={{ color: "blue" }}>Judul</h2>
        <p>Ini isi card</p>
      </Card>

      <Hello />
      <Hello name="Alga" />

      <Profile {...user} />
      <Profile name={user.name} age={user.age} hobby={user.hobby} />

      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />

      <Alert show={true} />

      <Status isActive={true} />
      <Status isActive={false} />

      <UserRole role="admin" />
      <UserRole role="user" />
      <UserRole />

      <List />

      <Counter />

      <Event />

      <EventObject1 />
      <EventObject2 />
      <EventObject3 />

      <CounterHook />
      <CounterHook />
    </>
  );
}

function Profile({ name, age, hobby }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Umur: {age}</p>
      <p>Hobi: {hobby}</p>
    </div>
  );
}

function Hello({ name = "Nama Kosong" }) {
  return <h2>Halo, {name}</h2>;
}

export default App;
