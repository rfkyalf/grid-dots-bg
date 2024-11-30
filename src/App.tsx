function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="w-[70%] mx-auto text-center">
        <h1 className="text-[3rem] font-bold text-neutral-950">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-[1rem] text-neutral-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
          eligendi dolore? Atque labore odio soluta amet, rem aspernatur veniam
          molestias repellendus maiores harum magni! Eius aut nihil cum sunt
          sequi?
        </p>
      </div>
      {/* Dots background */}
      <div className="absolute -z-10 inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

      {/* Grid background */}
      {/* <div className="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" /> */}
    </div>
  );
}

export default App;
