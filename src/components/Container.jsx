import Contacts from "./Contacts";
import Navbar from "./Header";

const Container = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main className="container__main">
        {children}
      </main>
      <Contacts />
    </div>
  )
}

export default Container;