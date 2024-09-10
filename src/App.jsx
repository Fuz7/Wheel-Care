import Navbar from './components/Navbar';
import Home from './components/Home/Home';
function App() {
  return (
    <>
      <div className="min-h-lvh bg-[#fcfcfc] flex flex-col">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
