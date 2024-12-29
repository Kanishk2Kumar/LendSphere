import FAQSection from '../../components/faq';
import Footer from '../../components/footer';
import Hero from '../../components/hero';
import TopInvestor from '@/components/Topinvestor';
import OurSupportedAssets from '@/components/SupportedAssets';
import { Scope } from '@/components/Scope';

function App() {
  return (
    <div>
      <Hero />
      <Scope />
      <TopInvestor/>
      <OurSupportedAssets/>
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

