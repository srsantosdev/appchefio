import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/theme';

import { styles } from './styles';

export const SignUp: React.FC = () => {
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
        <Text style={styles.title}>Seja bem vindo!</Text>
        <Text style={styles.subtitle}>Por favor, insira seus dados aqui</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Feather
              name="user"
              size={20}
              color={theme.colors.text500}
            />

            <TextInput
              style={styles.inputField}
              placeholder="Nome completo"
              placeholderTextColor={theme.colors.text300}
            />
          </View>

          <View style={[styles.input, {
            marginTop: 16,
          }]}>
            <Feather
              name="mail"
              size={20}
              color={theme.colors.text500}
            />

            <TextInput
              style={styles.inputField}
              placeholder="E-mail ou telefone"
              placeholderTextColor={theme.colors.text300}
            />
          </View>

          <View style={[styles.input, {
            marginTop: 16,
          }]}>
            <Feather
              color={theme.colors.text500}
              name="lock"
              size={20}
            />

            <TextInput
              style={styles.inputField}
              placeholder="Senha"
              placeholderTextColor={theme.colors.text300}
            />
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Sua senha precisa ter:</Text>

          <View style={styles.infoItem}>
            <View style={styles.containerIcon}>
              <Feather
                name="check"
                color={theme.colors.primary}
                size={15}
              />
            </View>
            <Text style={styles.infoText}>
              No mínimo 6 caracteres
            </Text>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.containerIcon}>
              <Feather
                name="check"
                color={theme.colors.primary}
                size={15}
              />
            </View>
            <Text style={styles.infoText}>
              Ter um número
            </Text>
          </View>
        </View>

        <RectButton 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('VerificationCode')}
        >
          <Text style={styles.primaryButtonText}>
            Cadastrar
          </Text>
        </RectButton>
      </View>
    </View>
  )
}
