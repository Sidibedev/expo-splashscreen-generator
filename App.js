
import { useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Homescreen from './pages/Homescreen';
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Homescreen />;
}
