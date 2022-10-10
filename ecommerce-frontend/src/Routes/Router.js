import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Cart from '../Pages/Cart/Cart'
import Home from '../Pages/Home/Home'
import Stock from '../Pages/Stock/Stock'

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index exact path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/stock' element={<Stock />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}