import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from '../Style';
import Button from './Button';
import { View as MotiView } from 'moti';

const SplashscreenPreview = ({ logo, onDownload, backgroundColor }) => {
    return (
        <View style={styles.preview}>
            <Text style={styles.previewTitle}>Your awesome SplashScreen</Text>

            <MotiView
                style={[styles.previewContainer, { backgroundColor }]}
                from={{
                    scale: 0.3,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,

                }}

                transition={{
                    type: 'spring',
                }}
            >
                {logo ? (
                    <Image
                        resizeMode="contain"
                        source={{ uri: logo }}
                        style={styles.logo}
                    />
                ) : (
                    <View style={styles.logoPlaceholder} />
                )}
            </MotiView>
            <Button
                style={{ marginTop: 40 }}
                title="Download SplashScreen"
                onPress={onDownload}
                disabled={!logo}
            />
        </View>
    );
};

export default React.memo(SplashscreenPreview);
