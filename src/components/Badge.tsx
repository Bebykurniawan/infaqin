const Badge = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="inline-block max-w-xs rounded-full animate-rotate-border bg-conic/[from_var(--border-angle)] from-black via-green-600 to-black p-px from-80% via-90% to-100%">
          <div className="px-8 py-2 rounded-full bg-neutral-950 border border-neutral-900 text-white/80 text-center font-medium text-xs md:text-base">
            Ramadhan Kareem✨
          </div>
        </div>
      </div>
    </>
  );
};

export default Badge;
