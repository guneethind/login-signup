import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";

const persistConsif = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConsif, reducers);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
