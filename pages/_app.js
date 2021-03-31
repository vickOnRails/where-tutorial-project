import "../components/app.css";
import { ErrorBoundary } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
export default MyApp;
