import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/routes/AppRoutes'
import store from './store/store'
import { useState } from 'react'

function App() {
    // const [user, setUser] = useState(localStorage.getItem('auth') || null)
    const user = localStorage.getItem('auth') || null

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes user={user} />
            </BrowserRouter>
        </Provider>
    )
}

export default App
