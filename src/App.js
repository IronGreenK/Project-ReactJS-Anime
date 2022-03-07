import "./assets/css/styles.css";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Common/Header";
import HomePage from "./pages/Home/HomePage";
import AnimeContextProvider from "./contexts/AnimeContext";
import Footer from "./components/Common/Footer";

const App = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                {<AnimeContextProvider>
                    <HomePage/>
                </AnimeContextProvider>}
            </Route>
            <Route path="/lyrics/track/:commontrack_id">
                {/*          <LyricsContextProvider>
            <Lyrics />
          </LyricsContextProvider>*/}
            </Route>
            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
);

export default App;
