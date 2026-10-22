import { View, Text, TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/global-styles';


interface Props extends TextProps {
    children: String;
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant, ...rest }: Props) => {
    return (
        <View>
            <Text style={[{ color: 'white', fontFamily: 'SpaceMono' },
            variant == 'h1' && globalStyles.mainResult,
            variant == 'h2' && globalStyles.subResult,
            ]}
                numberOfLines={1}
                adjustsFontSizeToFit
                {...rest}>
                {children}
            </Text>
        </View>
    )
}

export default ThemeText