import { Text, View } from 'react-native'
import { globalStyles } from '../../styles/global-styles'
import ThemeText from './components/ThemeText'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      <ThemeText variant='h1'>
        Hola mundo
      </ThemeText>
      <ThemeText variant='h2'>
        Hola mundo
      </ThemeText>

    </View>
  )
}

export default CalculatorApp