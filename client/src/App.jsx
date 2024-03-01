import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
// import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from '@thirdweb-dev/react';

import { Navbar, Sidebar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  const { contract, isLoading } = useContract("0x0000000000000000000000000000000000000000");
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;