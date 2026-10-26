import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/theme';
import { globalStyles } from '../../../styles/global-styles';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
}


const CalculatorButton = ({ label, color = Colors.darkGrey, blackText = false, onPress }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
            })}
            onPress={() => {
                Haptics.selectionAsync();
                onPress();
            }}>
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : Colors.textPrimary,
            }}>{label}</Text>
        </Pressable>




    )
}

export default CalculatorButton
