import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";

// const Hello = () => {
//   const data = useSelector((state) => state.remember);
//   if (!data?.rememberMe) {
//     return "login";
//   }
//   return;
// };

const persistConsif = {
  key: "root",
  storage: storage,
  // blacklist: [`${Hello()}`],
};

const persistedReducer = persistReducer(persistConsif, reducers);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
