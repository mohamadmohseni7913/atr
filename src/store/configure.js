import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
import logger from "./middleware/logger";
import toast from "./middleware/toas";
import reducer from "./reducer";




export default function () {
  return configureStore({    reducer,
    middleware: [ ...getDefaultMiddleware(),logger("logged") , toast, api ]  });
}  