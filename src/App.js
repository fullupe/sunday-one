import Card from "./components/Card";


function App() {
  return (
    <div className="flexh justify-center md:ml-4 items-center min-h-screen flex-col space-y-2 grid md:grid-cols-2">
   
    <Card
    name=" william gyekye"
    profession=" I.T Consultant"
    tel="+233242261979"
    street=" Tema community-5"
    email=" w.gyekye@gmail.com"
    website="william.com.gh"
    />
    <Card
    name="kenneth omane"
    profession=" I.T Consultant"
    tel="+233224565434"
    street=" Tema community-22"
    email=" k-omane@gmail.com"
    website="komane.com.gh"
    />
    <Card
    name="George Cudjo"
    profession=" I.T Consultant"
    tel="+2332454328"
    street="Nugua"
    email=" georgek@gmail.com"
    website="georgek.com.gh"
    />
    <Card
    name="sampson"
    profession=" I.T Consultant"
    tel="+2332456743"
    street="East legon"
    email="sampson@gmail.com"
    website="sampson.com.gh"
    />
      
    </div>
  );
}

export default App;
