import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFileDownload,
  faPhone,
  faSms,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFileDownload, faPhone, faSms, faEnvelope);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
