import logo from './logo.svg';
import './App.css';
import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { GlobalProvider } from './context/GlobalState';



function App({routes, proutes}) {
  
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <GlobalProvider>
      <Navbar bg="light">
        <Nav className="mx-auto">
          {proutes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </GlobalProvider>
  )
}

export default App;
