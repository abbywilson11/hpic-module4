import React, { useEffect } from "react";
import Header from "./components/Header"; //import header
import ResourcesSection from "./components/ResourcesSection"; // import resources
import Footer from "./components/Footer"; //import footer
import Table from "./components/table"; //import footer
import "./App.css"; //import app style

export default function App() {
  useEffect(() => {
    // in development, we'll connect to backend running on port 5000
    fetch("http://localhost:5000/api")
      .then((res) => res.json()) //parse json
      .catch((err) => console.error("Error fetching data:", err)); //error handling from chatgpt
   }, []);
      return (
    <div> {/* order of layout */}
      <Header />
      <Table />
      <ResourcesSection /> 
      <Footer />
    </div>
  );
}