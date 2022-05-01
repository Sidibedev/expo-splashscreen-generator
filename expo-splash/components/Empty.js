import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Style'
import EmptyIcon from '../assets/svg/Empty'

const Empty = () => {
    return (
        <View style={styles.emptyContainer}>
            <EmptyIcon />
            <Text style={[styles.title, { textAlign: 'center', width: "80%", marginTop: 30 }]}>Not yet available on mobile or tablet</Text>
            <Text style={[styles.subtitle, { textAlign: 'center' }]}>Instead use your computer to download your splashscreen and include it into your expo project </Text>
        </View>
    )
}

export default Empty