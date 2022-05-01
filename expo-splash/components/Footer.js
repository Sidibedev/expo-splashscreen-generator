import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../Style';

const Footer = () => {
    const goToTwitter = React.useCallback(() => {
        window.open('https://twitter.com/mouhamedaly01');
    }, []);
    const goToGithub = React.useCallback(() => {
        window.open('https://github.com/Sidibedev/expo-splashscreen-generator');
    }, []);
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
                Made with expo by
                <Text style={styles.link} onPress={goToTwitter}>
                    {' '}
                    @mouhamedaly
                </Text>
                {'  | '}
                <Text style={styles.link} onPress={goToGithub}>
                    Github Project
                </Text>
            </Text>
        </View>
    );
};

export default Footer;
