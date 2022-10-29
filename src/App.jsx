import { Suspense } from 'react';
import FallbackLoader from './design-system/loaders/FallbackLoader';
import AppRoutes from './AppRoutes';

const App = () => {
    return (
        <Suspense fallback={<FallbackLoader />}>
            <AppRoutes />
        </Suspense>
    );
};

export default App;
