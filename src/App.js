import "./App.css";
import Counter from "./Components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
