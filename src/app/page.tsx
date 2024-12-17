import LatestBlog from "./component/Blog";
import FeaturedProducts from "./component/Featuerd";
import HeroSection from "./component/Hero";
import Latest from "./component/Latest"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeaturedProducts/>
      <LatestBlog/>
      <Latest />
            </main>
  );
}
