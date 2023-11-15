import { Provider } from "react-redux";
import ToDoPage from "./pages/ToDo.Page";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store } from "./Store";

function App() {
  const reduxPersistStore = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={reduxPersistStore}>
          <ToDoPage />
        </PersistGate>
      </Provider>
      
    </>
  );
}

export default App;
