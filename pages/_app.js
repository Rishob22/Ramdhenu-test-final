import "@/styles/globals.css";
import { Layout } from "@/components";
import { StateContext } from "@/context/StateContext";
import {Toaster} from 'react-hot-toast';  //for the pop up
export default function App({ Component, pageProps }) {
  //passing the data from the state context to every single component that is there in the layout
  return (
 <StateContext>
  <Layout>
    <Toaster />
    <Component {...pageProps} />
  </Layout>;
 </StateContext>
  );
}
