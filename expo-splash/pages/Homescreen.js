import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { FONTS, FONTSIZE } from '../constants/fonts'
import { ColorPicker } from '../components/ColorPicker'
import Tooltip from 'react-native-walkthrough-tooltip';
import * as ImagePicker from 'expo-image-picker';
import { generateImagesAsync } from '../utils/processImage'

export default function Homescreen() {
    const [color, setColor] = React.useState(COLORS.secondary)
    const [visibleColorTooltip, setVisibleColorTooltip] = React.useState(false)

    const openCloseTooltip = () => setVisibleColorTooltip(!visibleColorTooltip)
    const [image, setImage] = React.useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const downloadImage = async () => {
        await generateImagesAsync({ image, color });
    }
    return (
        <View style={styles.container}>


            <View style={styles.content}>

                <View style={styles.config}>
                    <View style={{ alignSelf: "center", width: "90%" }}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Generate your Expo SplashScreen</Text>
                            <Text style={styles.subtitle}>Upload your awesome logo and download your splashscreen in PNG format and with good dimensions</Text>
                        </View>


                        <View style={styles.uploadContainer}>


                            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                <View style={styles.row}>
                                    <View style={styles.dot}></View>
                                    <Text style={styles.subtitle}>Upload your logo</Text>

                                </View>

                                <TouchableOpacity onPress={pickImage} style={styles.downloadButton}><Text style={styles.buttonText}>Upload</Text></TouchableOpacity>

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
                                    content={
                                        <ColorPicker
                                            onValueChanged={setColor}
                                        />
                                    }
                                    closeOnContentInteraction={false}
                                    backgroundColor='rgba(0,0,0,0)'
                                    contentStyle={{ backgroundColor: "#F2F2F2", marginTop: 10 }}
                                    animated={true}
                                    arrowSize={{ width: 16, height: 8 }}
                                    placement="bottom"
                                    showChildInTooltip={false}
                                    onClose={openCloseTooltip}
                                >
                                    <TouchableOpacity onPress={openCloseTooltip} style={styles.downloadButton}><Text style={styles.buttonText}>Select color</Text></TouchableOpacity>

                                </Tooltip>

                            </View>

                        </View>


                    </View>

                </View>
                <View style={styles.preview}>
                    <Text style={styles.previewTitle}>It will look like this</Text>
                    <View style={[styles.previewContainer, { backgroundColor: color }]}>

                        {image ?
                            <Image resizeMode="contain" source={{ uri: image }} style={{ width: 100, height: 100 }} /> : <View style={styles.logoPlaceholder} />}
                    </View>
                    <TouchableOpacity onPress={downloadImage} style={[styles.downloadButton, { position: "absolute", bottom: 30 }]}>
                        <Text style={styles.downloadButtonText}>Download SplashScreen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    config: {
        flex: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        flexDirection: "column",
        paddingHorizontal: 10,
        alignItems: "baseline"
    },
    preview: {
        flex: 6,
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        letterSpacing: -0.5,
        color: COLORS.white,
        fontSize: FONTSIZE.big,
        fontFamily: FONTS.bold
    },
    previewTitle: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: FONTSIZE.medium,
        marginBottom: 20,
        fontFamily: FONTS.regular,
        letterSpacing: -0.8
    },
    previewContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        height: "70%",
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 5,
            height: 5,

        },
        shadowOpacity: 2.0,
        shadowRadius: 30,

    },
    downloadButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.tint,
        borderRadius: 15
    },
    downloadButtonText: {
        color: COLORS.primary,
        fontSize: FONTSIZE.medium,
        fontFamily: FONTS.semi
    },
    subtitle: {
        color: "gray",
        fontFamily: FONTS.regular,
        fontSize: FONTSIZE.medium, letterSpacing: -0.5, width: "95%"
    },
    uploadContainer: {
        width: "90%",
        backgroundColor: COLORS.secondary,
        height: 100,
        borderRadius: 15,
        marginVertical: 20, justifyContent: "center",
        padding: 20
    },
    dot: {
        width: 5, height: "90%", marginHorizontal: 10, backgroundColor: COLORS.tint, borderRadius: 100
    }
    , row: {
        flexDirection: "row",
        alignItems: "center",
        height: "100%"
    }, buttonText: {
        fontFamily: FONTS.medium
    },
    logoPlaceholder: {
        width: 100, height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "gray",
    },
    content: {
        flex: 1,
        flexDirection: "row"
    },
    header: {
        marginBottom: 30
    }
})