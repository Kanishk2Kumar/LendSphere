
import Navbar from '@/components/navbar';
import FAQSection from '../../components/faq';
import Footer from '../../components/footer';
import Hero from '../../components/hero';
import TopInvestor from '@/components/Topinvestor';
import OurSupportedAssets from '@/components/SupportedAssets';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopInvestor/>
      <OurSupportedAssets/>
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

