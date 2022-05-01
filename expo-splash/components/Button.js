import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../Style'

export default function Button({ title, disabled, onPress, style }) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                disabled ? styles.downloadButtonDisabled : styles.downloadButton,
                style
            ]}
        >
            <Text style={styles.downloadButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}