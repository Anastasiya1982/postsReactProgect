import { Routes, Route, Navigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/Layout";
import CommentsPage from "./pages/CommentsPage";

import "./App.css";
import RequireAuth from "./hok/RequireAuth";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <div className="App" id={theme}>                 
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="about/*" element={<AboutPage />}>
                <Route path="contacts" element={<div>Contacts Page</div>} />
                <Route path="team" element={<div>Team Page</div>} />
              </Route>
              <Route
                path="about-us"
                element={<Navigate to="/about" replace />}
              />
              <Route path="login" element={<LoginPage />} />
              <Route path="posts" element={<PostsPage />} />
              <Route
                path="posts/:id/comments"
                element={
                  <RequireAuth>
                    <CommentsPage />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
