import Badge from "./Badge";
const Heading = () => {
  return (
    <>
    <header className="mx-4">
      <div className="container mx-auto pt-24 text-center">
        <Badge />
        <h1 className="py-6 text-2xl md:text-5xl font-medium mx-auto tracking-wide md:leading-14 bg-gradient-to-r from-green-200/80 to-slate-50 bg-clip-text text-transparent">
          Kalkulator infaq yang membantu <br/> kamu bersedekah dengan mudah.
        </h1>
      </div>
    </header>
    </>
  );
};

export default Heading;
