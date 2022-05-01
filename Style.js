import { StyleSheet } from "react-native";
import { COLORS } from "./constants/colors";
import { FONTS, FONTSIZE } from "./constants/fonts";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    configContainer: {
        flex: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        flexDirection: "column",
        paddingHorizontal: 10,
        alignItems: "baseline"
    },
    config: {
        alignSelf: 'center',
        width: '85%',
        flex: 1,
        justifyContent: 'center',
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
        marginBottom: 40,
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
        borderRadius: 15,
    },
    downloadButtonDisabled: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.tint,
        opacity: 0.2,
        borderRadius: 15,
    },
    downloadButtonText: {
        color: COLORS.primary,
        fontFamily: FONTS.medium
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
    },
    footerContainer: {
        position: "absolute",
        bottom: 20
    },
    footerText: {
        color: COLORS.white,
        fontFamily: FONTS.medium,
        fontSize: FONTSIZE.small
    },
    link: {
        color: COLORS.tint,
        fontFamily: FONTS.medium
    },
    logo: { width: 100, height: 100 },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})
