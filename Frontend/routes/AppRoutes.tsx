import { Route, Routes } from "react-router-dom";
import {Home} from '../pages/Home'
import {Login} from '../pages/Login'
import {Signup} from '../pages/Signup'
import {Packages} from '../pages/Packages'
import {PackageDetails} from '../pages/PackageDetails'

function AppRoutes() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
