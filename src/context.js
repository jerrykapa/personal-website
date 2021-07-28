import React, {useContext,useState} from 'react';
import sublinks from './data'
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const datalinks = sublinks;

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find(item=>item.page === text);
    
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

    return (
        <AppContext.Provider value={{
            openSubmenu,
            closeSubmenu,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            isSidebarOpen,
            page,
            location,
            datalinks
        }}>
            {children}
        </AppContext.Provider>
    );
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider}


