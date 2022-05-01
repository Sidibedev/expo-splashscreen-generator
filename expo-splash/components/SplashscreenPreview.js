import { Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from '../Style'
import Button from './Button'

const SplashscreenPreview = ({ logo, onDownload, backgroundColor }) => {
    return (
        <View style={styles.preview}>
            <Text style={styles.previewTitle}>Your awesome SplashScreen</Text>
            <View style={[styles.previewContainer, { backgroundColor }]}>
                {logo ? (
                    <Image
                        resizeMode="contain"
                        source={{ uri: logo }}
                        style={styles.logo}
                    />
                ) : (
                    <View style={styles.logoPlaceholder} />
                )}
            </View>
            <Button style={{ marginTop: 40 }} title="Download SplashScreen" onPress={onDownload} disabled={!logo} />

        </View>
    )
}

export default React.memo(SplashscreenPreview)

