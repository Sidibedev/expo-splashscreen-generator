import React from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import tinycolor from "tinycolor2";
import { COLORPICKER_COLORS } from "../constants/colors";

export const toState = (data, oldHue) => {
    const color = data.hex ? tinycolor(data.hex) : tinycolor(data);
    const hsl = color.toHsl();
    const hsv = color.toHsv();
    const rgb = color.toRgb();
    const hex = color.toHex();
    if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
    }
    const transparent = hex === "000000" && rgb.a === 0;

    return {
        hsl,
        hex: transparent ? "transparent" : `#${hex}`,
        rgb,
        hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source,
    };
};

export const getContrastingColor = (data) => {
    if (!data) {
        return "#fff";
    }
    const col = toState(data);
    if (col.hex === "transparent") {
        return "rgba(0,0,0,0.4)";
    }
    const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? "#000" : "#fff";
};

export const isValidHex = (hex) => {
    if (hex === "transparent") {
        return true;
    }
    // disable hex4 and hex8
    const lh = String(hex).charAt(0) === "#" ? 1 : 0;
    return (
        hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid()
    );
};

function ColorView({ size, color, style }) {
    return (
        <View
            style={[
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    borderColor: "white",
                    borderWidth: 2,
                    backgroundColor: color,
                },
                style,
            ]}
        />
    );
}

export function ColorPicker({
    isMobile,
    onValueChanged,
    ...props
}) {

    const [text, onTextChanged] = React.useState("FFFFFF");
    const COLOR_SIZE = 24;
    const PADDING = 12;
    const SCROLL_HEIGHT = COLOR_SIZE + PADDING * 2;
    const COLORS = React.useMemo(() => COLORPICKER_COLORS.reverse(), []);
    return (
        <ScrollView
            {...props}
            style={[
                isMobile
                    ? { minHeight: SCROLL_HEIGHT, maxHeight: SCROLL_HEIGHT }
                    : { flexShrink: 1, flexGrow: 0, maxWidth: 300 },
                props.style,
            ]}
            contentContainerStyle={[
                { paddingVertical: PADDING },
                !isMobile && {
                    width: "100%",
                    flexDirection: "row",
                    flexWrap: "wrap",
                },
                props.contentContainerStyle,
            ]}
            horizontal={isMobile}
            pagingEnabled
        >
            {COLORS.map((color) => (
                <TouchableOpacity key={color} onPress={() => onValueChanged(color)}>
                    <ColorView
                        size={COLOR_SIZE}
                        color={color}
                        style={{ margin: isMobile ? 12 : 6 }}
                    />
                </TouchableOpacity>
            ))}
            <ColorPickerInput
                size={COLOR_SIZE}

                value={text}
                onValueChanged={onTextChanged}
                onSubmit={(value) => {
                    onValueChanged(value);
                }}
            />
        </ScrollView>
    );
}

function ColorPickerInput({ size, value, onValueChanged, onSubmit }) {
    return (
        <View
            style={[
                {
                    height: size,
                    flex: 1,
                    minWidth: 275,
                    margin: 6,
                    borderRadius: size / 2,
                    borderWidth: 2,
                    flexDirection: "row",
                    overflow: "hidden",
                },
                {
                    borderColor: "gray",
                    backgroundColor: "gray",
                },
            ]}
        >
            <View
                style={{
                    width: size,
                    height: size - 4,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{ alignSelf: "center", color: "#98A1A4" }}
                >
                    #
                </Text>
            </View>
            <TextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                value={value.replace("#", "")}
                onChangeText={(value) => {
                    onValueChanged(value);

                    if (isValidHex(value)) {
                        onSubmit("#" + tinycolor(value).toHex());
                    }
                }}
                style={{
                    flex: 1,
                    paddingHorizontal: 4,
                    color: "#fff",
                    outlineColor: "transparent",
                }}
            />
        </View>
    );
}


