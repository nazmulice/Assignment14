import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Content from "./component/Content";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  
  return (
    <div className="container">
      <Header title="Welcome to React Application" />
      <Content />
      <Footer text="Copyright © 2020 - 2023 @ All rights reserved Nazmul Hossain." />
    </div>
  );
}

export default App;
