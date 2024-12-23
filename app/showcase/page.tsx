import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { BlurFadeDemo } from "@/components/ui/demos/blur-fade-demo";
import WordFadeIn from "@/components/ui/word-fade-in";
import ShowcaseNavbar from "@/components/ui/showcase-navbar";
import Footer from "@/components/ui/footer";

const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-yellow-100
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <ShowcaseNavbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Design & Code That Helps Your Business Grow"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-black">
          Have a look at some of our recent projects.
        </p>

        <BlurFadeDemo />

        <LetsMakeThingsHappenSection />


      </section>

      <Footer/>
    </div>
  );
};

export default Showcase;