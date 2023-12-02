import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes/routes';
import ProtectedRoute from './ProtectedRoute';

const isAllowed = true;

function AppRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
                {privateRoutes.map((r) => (
                    <Route key={r.path} element={r.element} path={r.path} />
                ))}
            </Route>
            <Route element={<ProtectedRoute isAllowed />}>
                {publicRoutes.map((r) => (
                    <Route key={r.path} element={r.element} path={r.path} />
                ))}
            </Route>
        </Routes>
    );
}

export default AppRoutes;
