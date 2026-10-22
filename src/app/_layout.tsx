import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { View } from 'react-native';

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Slot />
    </View>
  )
}

export default RootLayout