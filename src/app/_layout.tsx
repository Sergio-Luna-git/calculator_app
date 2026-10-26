import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { Platform, StatusBar, View } from 'react-native';
import { globalStyles } from '../../styles/global-styles';
import { NavigationBar } from 'expo-navigation-bar';

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const isAndroid = Platform.OS == 'android';
  if (isAndroid) {
    NavigationBar.setStyle('dark');
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar barStyle={"light-content"} />
    </View>
  )
}

export default RootLayout