const Salesbar = () => {
  return (
    <div className="h-min-[32px] flex items-center justify-center bg-stone-900 px-8 py-2">
      <p className="text-balance text-center text-xs text-white">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et{" "}
        <span className="text-gold-700">10%</span> dolore.
      </p>
    </div>
  );
};

export default Salesbar;
