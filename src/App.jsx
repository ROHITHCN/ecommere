import React, { useState } from 'react';
import Header from './components/Header';
import Comp1 from './components/Comp1';
import Footer from './components/Footer';
import Comp2 from './components/Comp2';
import SearchTags from './components/searchingFor';
import ShopByDepartment from './components/ShopByDepartment ';
import MailingList from './components/MailingList';
import ShopByRoom from './components/ShopByRoom';
import SideBySideBoxes from './components/SideBySideBoxes';
import TrustedByThousands from './components/TrustedByThousands';
import AreYouFollowingUs from './components/AreYouFollowingUs';
import PeopleWhoViewedItems from './components/PeopleWhoViewedItems';
import OurExpertsPicks from './components/OurExpertsPicks'
import LatestPosts from './components/LatestPosts';
import Crousel from './components/Crousel';

import bx1 from './assets/box1.png';
import bx2 from './assets/box2.png'; 
import bx3 from './assets/box3.png';
import bx4 from './assets/box4.png';

function App() {
  const [count, setCount] = useState(0);
  const tags = [
    "floor lamps",
    "wall sconces",
    "celest",
    "visual comfort",
    "uttermost decor",
    "linear chandelier",
    "table lamps",
    "wall art",
  ];
  const boxes1 = [
    {
      image: bx1,
      title: "Farmhouse",
      description: "Feast your eyes on neutrals and vintage accents.",
      link: "#",
    },
    {
      image: bx2,
      title: "Mid-Century Modern",
      description: "Bold, functional, curvy, oh-so-chic.",
      link: "#",
    },
  ];
  const boxes2 = [
    {
      image: bx3,
      title: "This Just In - New arrivals",
      description: "Shop for only the best and brightest.",
      link: "#",
    },
    {
      image: bx4,
      title: "Sale and Clearance Center",
      description: "You can have an eye for a bargain AND for style.",
      link: "#",
    },
  ];

  return (
<div className="main-container">
<Header />
<Crousel/>
      
      <div className="centered-box">
      <main className="container mx-auto flex justify-center items-center flex-grow w-11/12">
        <Comp1 />
      </main>
      </div>
      <Comp2 /> 
      <SearchTags tags={tags}/>
      <div className="py-8">
      <ShopByDepartment departments/>
      </div>
      <div className="py-8 w-11/12 mx-auto">
      <LatestPosts/>
      </div>
      <div className="py-8"> 
      <MailingList/>
      </div>
      <div className="py-8">
      <SideBySideBoxes boxes={boxes1} heading="Trending Styles" />
      </div>
      <div className="py-8"> 
      <ShopByRoom/>
      </div>
      <div className="py-8">
      <SideBySideBoxes boxes={boxes2} heading="More Ways to Shop"/>
      </div>
      <TrustedByThousands/>
      <div className='w-11/12 mx-auto'>
      <AreYouFollowingUs/>
      </div>
      <div className="py-8">
      <PeopleWhoViewedItems/>
      </div>
      <OurExpertsPicks/>
      <Footer />
    </div>
  );
}

export default App;