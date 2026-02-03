import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AlgarroboDestination from '@/components/home/AlgarroboDestination';
import Specialization from '@/components/home/Specialization';
import AboutViviana from '@/components/home/AboutViviana';
import HowWeWork from '@/components/home/HowWeWork';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProperties />
      <AlgarroboDestination />
      <Specialization />
      <AboutViviana />
      <HowWeWork />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
