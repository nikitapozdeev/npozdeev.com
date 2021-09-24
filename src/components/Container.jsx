import Contacts from "./Contacts";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Contacts />
    </div>
  )
}

export default Container;