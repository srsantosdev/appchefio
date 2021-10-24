import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import OnboardingImage from '../../assets/onboarding.png'

import { styles } from './styles';

export const Onboarding: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={OnboardingImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Comece a cozinhar</Text>

        <Text style={styles.description}>
          Não deixe para amanhã o que se pode comer hoje.
        </Text>

        <RectButton 
          style={styles.button} 
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </View>
  )
}
