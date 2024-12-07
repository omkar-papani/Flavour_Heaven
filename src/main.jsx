import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Area from './Components/Area/Area.jsx'
import Category from './Components/Category/Category.jsx'
import RecipesInfo from './Components/Cards/RecipesInfo.jsx'
import AreaRecipes from './Components/Area/AreaRecipes.jsx'
import CategoryRecipes from './Components/Category/CategoryRecipes.jsx'
import SearchResults from './Components/SearchResults/SearchResults.jsx'
import About from './Components/About/About.jsx'
import TermsPolicy from './Components/Footer/TermsPolicy.jsx'
import Loader from './Components/Loader/Loader.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='/area' element={<Area /> }/>
    <Route path='/category' element={<Category /> }/>
    <Route path='/ri' element={<RecipesInfo />}/>
    <Route path='/ar' element={<AreaRecipes />}/>
    <Route path='/cr' element={<CategoryRecipes />}/>
    <Route path='/results' element={<SearchResults />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/terms' element={<TermsPolicy />}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
