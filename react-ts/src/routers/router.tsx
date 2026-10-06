import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { Modulo1Page } from "../page/Modulo1Page";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/modulo1" element={<Modulo1Page />} />
            </Routes>
        </BrowserRouter>
    )
}       