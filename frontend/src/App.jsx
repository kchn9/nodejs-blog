import categoriesAPI from "./services/categoriesAPI";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Content } from "./Content";
import { Alert } from "./Alert";

const App = () => {
  const [activeCategory, setActiveCategory] = useState({
    _id: "0",
    name: "All",
  });
  const [creatingPostMode, setCreatingPostMode] = useState(false);
  const [categories, setCategories] = useState(null);
  const fetchCategories = async () => {
    categoriesAPI.getAllCategories().then((res) => {
      setCategories(res);
    });
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const [alert, setAlert] = useState({
    title: "",
    body: "",
    type: "",
  });

  return (
    <Layout>
      <Header
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        creatingPostMode={creatingPostMode}
        setCreatingPostMode={setCreatingPostMode}
      />
      <Content
        categories={categories}
        activeCategory={activeCategory}
        creatingPostMode={creatingPostMode}
        setAlert={setAlert}
      />
      <Alert title={alert.title} errorBody={alert.body} type={alert.type} />
    </Layout>
  );
};
export default App;
