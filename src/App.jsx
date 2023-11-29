import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes";
import store from "./store/store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
