import { useState, createContext, useContext } from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import App from './App';
import BootcampPage from './pages/BootcampPage';

interface NavigationContextType {
  currentPage: 'home' | 'bootcamp';
  navigateToBootcamp: () => void;
  navigateToHome: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within AppRouter');
  }
  return context;
};

export default function AppRouter() {
  const [currentPage, setCurrentPage] = useState<'home' | 'bootcamp'>('home');

  const navigateToBootcamp = () => {
    setCurrentPage('bootcamp');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigationValue: NavigationContextType = {
    currentPage,
    navigateToBootcamp,
    navigateToHome,
  };

  return (
    <NavigationContext.Provider value={navigationValue}>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          {currentPage === 'home' ? <App /> : <BootcampPage />}
        </main>
        <Footer />
      </div>
    </NavigationContext.Provider>
  );
}
