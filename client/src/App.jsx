import {Routes, Route} from 'react-router-dom'


import Header from "./Components/Header/Header"
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import GameList from './Components/GameList/GameList'
import GameCreate from './Components/GameCreate/GameCreate'
import Details from './Components/Details/Details'

function App() {

    return (
        <div id="box">
            <Header/>

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/games' element={<GameList/>}/>
                    <Route path='/games/:gameId/details' element= {<Details/>}></Route>
                    <Route path='/games/create' element={<GameCreate/>}/>
                </Routes>
            </main>

        </div>
    )
}

export default App
