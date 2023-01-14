//css
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

//pages

import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetails from "./pages/PostDetails";
import Footer from "./components/Footer";
import AllPosts from "./pages/AllPosts";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post-details/:postId" element={<PostDetails />} />
          <Route path="/edit-post/:postId" element={<EditPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
