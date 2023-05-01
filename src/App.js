import "./App.css";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Pricing from "./Pages/Pricing";
import Enterprise from "./Pages/Enterprise";
import Empty_page from "./Images/Empty_page.png"
import Saved_gif from "./Images/Saved_gif.gif"
import StripeContainer from "./Components/StripeContainer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import MainTemp from "./Components/MainTemp";
import VideoSection from "./Components/VideoSection";
import { videoSrc} from "./Data/Data";
import SavedTemplates from "./Components/SavedTemplates";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
    <Sidebar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/payment" element={<StripeContainer/>} />
          <Route path="/main/Dashboard" element={<MainTemp Children={<SavedTemplates heading="You have not created any videos yet." src={Empty_page} />} />} />
          <Route path="/main/Saved" element={<MainTemp Children={<SavedTemplates heading="Your saved items will appear here" src={Saved_gif} />}/>} />
          <Route path="/main/videos" element={<MainTemp Children={<VideoSection Srcs={videoSrc}  width={{ base: "200px" , md:"250px" }}
        heading="See what others are doing with Lumen5"/>} />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
