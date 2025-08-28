import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const Home = () => import('./pages/Home.jsx').then(m => ({ default: m.Home }))
const Profile = () => import('./pages/Profile.jsx').then(m => ({ default: m.Profile }))
const Interests = () => import('./pages/Interests.jsx').then(m => ({ default: m.Interests }))
const Dashboard = () => import('./pages/Dashboard.jsx').then(m => ({ default: m.Dashboard }))
const Skills = () => import('./pages/Skills.jsx').then(m => ({ default: m.Skills }))
const Internships = () => import('./pages/Internships.jsx').then(m => ({ default: m.Internships }))
const Strengths = () => import('./pages/Strengths.jsx').then(m => ({ default: m.Strengths }))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, lazy: Home },
      { path: 'profile', lazy: Profile },
      { path: 'dashboard', lazy: Dashboard },
      { path: 'interests', lazy: Interests },
      { path: 'skills', lazy: Skills },
      { path: 'internships', lazy: Internships },
      { path: 'strengths', lazy: Strengths },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
