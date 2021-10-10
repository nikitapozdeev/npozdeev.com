import Container from "../components/Container";
import './app.css'

const App = ({ Component, pageProps }) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
};

export default App;