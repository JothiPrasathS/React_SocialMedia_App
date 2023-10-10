
import Header from "./Header";
import Nav from "./Nav"; 
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom"


function App() {


  return (
   <div className="App">
    <DataProvider>
      <Header  title="FOODSTAGRAM" />
      <Nav/>
      <Routes>
        <Route path="/" element = {
        <Home />}/>
        <Route path="post">
          <Route index element = {<NewPost />} />
          <Route path=":id" element = {<PostPage />} />
        </Route>
        <Route path="/edit/:id" element={<EditPost /> } />
        <Route path="about" element = {<About />} />
        <Route path="*" element = {<Missing />} />
      </Routes>
      <Footer /> 
      </DataProvider>
    </div>
  );
}

export default App;