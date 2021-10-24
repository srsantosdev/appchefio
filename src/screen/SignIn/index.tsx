import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { theme } from '../../global/theme';
import { styles } from './styles';

export const SignIn: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem vindo de volta!</Text>
        <Text style={styles.subtitle}>Por favor, insira sua conta aqui</Text>
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

          <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.forgotPasswordButton}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordButtonText}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>

          <View style={styles.formButtons}>
            <RectButton style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Login</Text>
            </RectButton>

            <Text style={styles.dividerText}>
              Ou continue com
            </Text>

            <RectButton style={styles.socialLoginButton}>
              <Ionicons
                name="logo-google"
                size={20}
                color={theme.colors.white}
              />

              <Text style={styles.socialLoginButtonText}>
                Google
              </Text>
            </RectButton>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.signUpText}>
            Não tem nenhuma conta?
          </Text>

          <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.highlightText}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
