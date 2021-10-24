import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/theme';

import { styles } from './styles';

export const ForgotPassword: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.gobackButton}
          onPress={() => navigation.goBack()}
        >
          <Feather
            name="arrow-left"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerTitles}>
        <Text style={styles.title}>Resgatar a senha</Text>
        <Text style={styles.subtitle}>Insira o seu e-mail para recuperar a senha</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Feather
              name="mail"
              size={20}
              color={theme.colors.text500}
            />

            <TextInput
              style={styles.inputField}
              placeholder="E-mail"
              placeholderTextColor={theme.colors.text300}
            />
          </View>
        </View>

        <RectButton 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('PasswordVerificationCode')}
        >
          <Text style={styles.primaryButtonText}>
            Recuperar
          </Text>
        </RectButton>
      </View>
    </View>
  )
}
