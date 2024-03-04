import { Provider } from "react-redux";

import "./App.css";
import BugsList from "./components/BugsList";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
