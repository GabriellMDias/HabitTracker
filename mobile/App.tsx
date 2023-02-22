import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes'; //Padrão carrega o index
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br');

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded){
    return(
      <Loading/>
    );
  }
  
  return (
    <>
      <Routes/>
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent/>
    </>
  );
}