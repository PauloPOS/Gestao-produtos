// eslint-disable-next-line react/prop-types
import Header from "./header";
import Footer from "./footer";
import Container from "./container";

/* eslint-disable react/prop-types */
function Layout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
































