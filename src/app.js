import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Central from "./Pages/Central";

export default function App() {


    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/central" element={<Central/>}/>
            </Routes>
        </BrowserRouter>

    )

    
}