import AboutMe from "./AboutMe";

function GradientBorder() {
  return (
    <>
      <div className="w-full  mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.800)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border-2 border-transparent animate-border ">
        <div className="relative text-center z-10 px-0  rounded-2xl  w-full h-full mx-auto">
         <AboutMe/>
        </div>
      </div>
    </>
  );
}
export default GradientBorder;
