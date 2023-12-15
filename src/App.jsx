import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './components/routes/AppRoutes'
import store from './store/store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                limit={1}
            />
        </Provider>
    )
}

export default App
