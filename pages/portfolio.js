import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import PortfolioDetails from "../components/PortfolioDetails";
import Footer from "../components/Footer";

const PortfolioPage = () => (
  <Layout pageTitle="Creativarian Tech - Portfolio Page">
    <Navbar />
    <PageHeader title="Portfolio Page" />
    <PortfolioDetails />
    <Footer />
  </Layout>
);

export default PortfolioPage;
