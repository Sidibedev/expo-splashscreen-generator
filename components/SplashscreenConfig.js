import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../Style';
import Button from './Button';
import * as ImagePicker from 'expo-image-picker';
import Tooltip from 'react-native-walkthrough-tooltip';
import { ColorPicker } from './ColorPicker';
import Footer from './Footer';

const SplashscreenConfig = ({ setColor, setLogo }) => {
    console.log('setLogo: ');
    const [visibleColorTooltip, setVisibleColorTooltip] = React.useState(false);
    const openCloseTooltip = () => setVisibleColorTooltip(!visibleColorTooltip);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setLogo(result.uri);
        }
    };
    return (
        <View style={styles.configContainer}>
            <View style={styles.config}>
                <View style={styles.header}>
                    <Text style={styles.title}>Generate your Expo SplashScreen</Text>
                    <Text style={styles.subtitle}>
                        Upload your awesome logo, select your color and download your
                        splashscreen in PNG format and with good dimensions
                    </Text>
                </View>

                <View style={styles.uploadContainer}>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <View style={styles.row}>
                            <View style={styles.dot}></View>
                            <Text style={styles.subtitle}>Upload your logo</Text>
                        </View>
                        <Button title="Upload" onPress={pickImage} />
                    </View>
                </View>

                <View style={styles.uploadContainer}>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <View style={styles.row}>
                            <View style={styles.dot}></View>
                            <Text style={styles.subtitle}>Select your background color</Text>
                        </View>
                        <Tooltip
                            isVisible={visibleColorTooltip}
                            content={<ColorPicker onValueChanged={setColor} />}
                            closeOnContentInteraction={false}
                            backgroundColor="rgba(0,0,0,0)"
                            contentStyle={{ backgroundColor: '#F2F2F2', marginTop: 10 }}
                            animated={true}
                            arrowSize={{ width: 16, height: 8 }}
                            placement="bottom"
                            showChildInTooltip={false}
                            onClose={openCloseTooltip}
                        >
                            <Button
                                title="Select color"
                                onPress={openCloseTooltip}
                            />
                        </Tooltip>
                    </View>
                </View>

                <Footer />
            </View>
        </View>
    );
};

export default React.memo(SplashscreenConfig)
