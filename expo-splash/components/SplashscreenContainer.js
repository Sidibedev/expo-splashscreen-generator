import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors';
import useDimensions from '../hooks/useDimensions';
import { generateImagesAsync } from '../utils/processImage';
import SplashscreenConfig from './SplashscreenConfig';
import SplashscreenPreview from './SplashscreenPreview';
import { styles } from '../Style';
import Empty from './Empty';

const SplashscreenContainer = () => {
    const [color, setColor] = React.useState(COLORS.secondary);
    const [logo, setLogo] = React.useState(null);
    const { width } = useDimensions();

    const isMobile = React.useMemo(() => width < 1000, [width])

    const downloadSplash = async () => {
        await generateImagesAsync({ logo, color });
    };

    return (
        <View style={styles.container}>
            {isMobile ? <Empty /> :
                <View style={styles.content}>
                    <SplashscreenConfig setColor={setColor} setLogo={setLogo} />
                    <SplashscreenPreview
                        logo={logo}
                        onDownload={downloadSplash}
                        backgroundColor={color}
                    />
                </View>}
        </View>
    );
}

export default SplashscreenContainer

