import NavbarClient from '../components/NavbarClient';
import Footer from '../components/Footer';

export default function Client({ children }) {
    return (
        <>
            <NavbarClient />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}
