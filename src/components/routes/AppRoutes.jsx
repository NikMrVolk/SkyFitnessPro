import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes/routes";

function AppRoutes() {
    return (
        <Routes>
            {publicRoutes.map((r) => (
                <Route key={r.path} element={r.element} path={r.path} />
            ))}
        </Routes>
    );
}

export default AppRoutes;
