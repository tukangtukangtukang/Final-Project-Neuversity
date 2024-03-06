import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Admin({ children }) {
  return (
    <>
        <Navbar />
        <main>
            <h1>Admin</h1>
        </main>
        <Footer />
    </>
  )
}
