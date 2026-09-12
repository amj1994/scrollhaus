import VideoBackground from './components/VideoBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseSection from './components/ShowcaseSection';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();
  const scrollProgress = useScrollProgress();
  const videoZoom = 1 + scrollProgress * 0.3;

  return (
    <div className="min-h-[200vh]">
      <VideoBackground zoom={videoZoom} />
      <Navbar />
      <div className="relative" style={{ zIndex: 10 }}>
        <Hero scrollProgress={scrollProgress} />
        <ShowcaseSection scrollProgress={scrollProgress} />
      </div>
    </div>
  );
}
