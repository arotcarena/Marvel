import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../App.css';
import { ErrorPage } from '../ErrorPage';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Landing } from '../Landing';
import { Login } from '../Login';
import { SignUp } from '../SignUp';
import { Welcome } from '../Welcome';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/inscription" element={<SignUp />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
