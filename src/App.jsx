import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/routes/AppRoutes'
import store from './store/store'

function App() {
    const user = JSON.parse(localStorage.getItem('auth')) || null

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes user={user} />
            </BrowserRouter>
        </Provider>
    )
}

export default App
