import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { ReactFunction } from "./types";

export default function App(): ReactFunction {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
