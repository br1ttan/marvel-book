import AppHeader from "../components/appHeader/AppHeader";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouteEnum } from "../enums/appRoute.enum";
import HomePage from "./pages/homePage";
import ComicsPage from "./pages/comicsPage";
import SingeComicPage from "./pages/singeComicPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path={AppRouteEnum.Home} element={<HomePage />} />
                        <Route path={AppRouteEnum.Comics} element={<ComicsPage />} />
                        <Route path={`${AppRouteEnum.Comics}/:comicId`} element={<SingeComicPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
