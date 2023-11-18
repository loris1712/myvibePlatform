import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RouteChangeTracker = () => {
  const history = useHistory();

  useEffect(() => {
    // Funzione per tracciare la pagina
    const trackPage = (page) => {
      window.gtag('config', 'G-TB0BYQBX70', {
        page_path: page,
      });
    };

    // Traccia la pagina iniziale
    trackPage(window.location.pathname);

    // Ascolta i cambiamenti di route
    const unlisten = history.listen((location) => {
      trackPage(location.pathname);
    });

    // Pulizia all'unmount
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default RouteChangeTracker;