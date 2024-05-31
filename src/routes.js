import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/favorites";
import VideoCadastre from "./pages/VideoCadastre";


function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/watch/:id" element={<Watch />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/cadastre" element={<VideoCadastre/>}/>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>

    );
}

export default AppRoutes;