import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationHelpersContext } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {

    const navigation = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(res => {
            const {total} = res.data;

            setTotalConnections(total);
        })
    }, []);

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyTabs() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container} >
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudyTabs}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]} 
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText} >Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections} >
                Total de {totalConnections} conexões ja realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
            
        </View>
    );
}

export default Landing;