import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logOut } from "./actions";

function App() {
  const counter = useSelector((state) => state.myCounter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>myCounter is {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h1>User is logged in {isLogged}</h1> : ""}
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  );
}

export default App;
