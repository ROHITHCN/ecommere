import cwi from '../assets/cwi.png';  
import prog from '../assets/prog.png';
import livex from '../assets/livex.png';
import pageone from '../assets/pageone.png';

function Comp1() {
  return (
<div className="w-full max-w-8xl h-[500px] bg-[#0A2647] text-white flex flex-col justify-start items-center p-4">
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold">NEW YEAR NEW LIGHTING</h1>
        <p className="text-xl mt-4">Lighting Extravaganza - upto 40% OFF until 1/12</p>
      </div>

      <a href="#shop" className="mt-6 px-6 py-3 border-2 border-white text-white font-bold text-lg uppercase rounded text-center hover:bg-white hover:text-blue-900">
        Shop Now
      </a>
      <div className="mt-8 w-[90%] border-t-2 border-white"></div>


      <div className="mt-8 flex justify-center space-x-6 p-4">
      <a href="#link1">
    <img src={cwi}  width="150" height="70" alt="CWI" />
  </a>
  <a href="#link2">
    <img src={prog}   width="150" height="70" alt="Progress" />
  </a>
  <a href="#link3">
  <img src={livex}  width="150" height="70" alt="Livex" />
  </a>
  <a href="#link4">
    <img src={pageone}    width="150" height="70" alt="Pageone" />
  </a>
</div>




    </div>
  );
}

export default Comp1;
