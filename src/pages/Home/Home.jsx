import SectionMainFirst from '../../components/SectionMainFirst/SectionMainFirst';
import SectionAboutUs from '../../components/SectionAboutUs/SectionAboutUs';
import SectionDanceStyles from '../../components/SectionDanceStyles/SectionDanceStyles';
import SectionOurTeachers from '../../components/SectionOurTeachers/SectionOurTeachers';
import SectionAddressMap from '../../components/SectionAddressMap/SectionAddressMap';

export default function Home() {
  return (
    <>
      <SectionMainFirst />
      <SectionAboutUs />
      <SectionDanceStyles />
      <SectionOurTeachers />
      <SectionAddressMap />
    </>
  );
}
