import AutoCarousel from "@/components/homepage/autometicCaurasol";
import Footer from "@/components/homepage/footer";
import VideoSection from "@/components/homepage/VideoSection";
import NavBar from "@/components/layout/NavBar";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <AutoCarousel />
      <VideoSection />
      <Footer />
    </div>
  );
}
