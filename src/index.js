import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Student from './pages/Student'
import EditStudent from './pages/Student/edit-student.component'
import CreateStudent from './pages/Student/create-student.component'


import Classes from './pages/Classes'
import CreateClass from './pages/Classespage/create-class.component'

import Marks from './pages/Marks'
import EditClass from './pages/Classespage/edit-classcomponent'

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/students', name: 'Student', element: <Student />, nodeRef: createRef() },
  { path: '/create-student', name: 'Create Student', element: <CreateStudent />, nodeRef: createRef() },
  { path: '/edit-student/:id', name: 'Edit Student', element: <EditStudent />, nodeRef: createRef() },
  { path: '/classs', name: 'Class', element: <Classes />, nodeRef: createRef() },
  { path: '/create-class', name: 'Create Class', element: <CreateClass />, nodeRef: createRef() },
  { path: '/edit-class/:id', name: 'Edit Class', element: <EditClass />, nodeRef: createRef() },
  {
    path: '/marks',
    name: 'Marks',
    element: <Marks />,
    nodeRef: createRef(),
  },
  {
    path: '/classs',
    name: 'Classes',
    element: <Classes />,
    nodeRef: createRef(),
  },
];

const proutes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/students', name: 'Student', element: <Student />, nodeRef: createRef() },
  { path: '/classs', name: 'Class', element: <Classes />, nodeRef: createRef() },
  {
    path: '/marks',
    name: 'Marks',
    element: <Marks />,
    nodeRef: createRef(),
  }
]


const router = createBrowserRouter([
  {
    path: '/',
    element: <App routes={routes} proutes={proutes} />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
