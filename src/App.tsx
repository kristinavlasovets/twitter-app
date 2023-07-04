import { FC, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from './components/AppRouter';
import Loader from './components/Loader';
import { ThemeMode } from './constants/styles';
import { useAppSelector } from './hooks/useAppSelector';
import { themeSelector } from './store/slices/userSlice/selectors';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

const App: FC = () => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <ThemeProvider theme={currentTheme === ThemeMode.DARK ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
