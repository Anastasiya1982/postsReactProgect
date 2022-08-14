import { Routes, Route,Link, Outlet } from "react-router-dom";

const AboutPage = () => {
    return(
     <div data-testid='about-page'>
      <h1>Its About Page page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum nisi consequuntur dolorum recusandae sed fugiat mollitia excepturi esse optio,
          sit fugit voluptate aliquam, a, exercitationem culpa nulla saepe! Saepe, aliquid.</p>
       <ul>
        <li><Link to='/about/contacts' >OUR CONTACTS</Link></li>
        <li><Link to='/about/team' >OUR TEAM</Link></li>
       </ul>
{/* 
          <Routes>
             <Route path='contacts' element={<div>Contacts Page</div>}/>
             <Route path='team'  element={<div>Team Page</div>}/>
          </Routes> */}
          <Outlet/>
    </div>
   
    );
  };
  export default AboutPage;