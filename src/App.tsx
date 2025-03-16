import Background from "./components/Background";
import Form from "./components/Form";
import Heading from "./components/Heading";
import InfaqHistory from "./components/InfaqHistory";
import useInfaq from "./hooks/useInfaq";

const App = () => {
  const { infaqData, totalInfaq, addInfaq } = useInfaq();
  return (
    <>
      <Background />
      <Heading />
      <Form addInfaq={addInfaq} />
      <InfaqHistory infaqData={infaqData} totalInfaq={totalInfaq} />
    </>
  );
};

export default App;
