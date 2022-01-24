import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './src/context';
import LoadingScreen from './src/screens/LoadingScreen';
import MainNavigation from './src/components/Navigation/MainNavigation';
import AuthNavigation from './src/components/Navigation/AuthNavigation';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      logIn: () => {
        setIsLoading(true);
        setUserToken('token');
        setTimeout(() => setIsLoading(false), 1000);
      },
      createAccount: () => {
        setIsLoading(true);
        setUserToken('token');
        setTimeout(() => setIsLoading(false), 1000);
      },
      logOut: () => {
        setIsLoading(true);
        setUserToken(null);
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}