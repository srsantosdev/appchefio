import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/theme';

import { styles } from './styles';

export const ResetPassword: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.containerTitles}>
        <Text style={styles.title}>Redefina sua senha</Text>
        <Text style={styles.subtitle}>Insira sua nova senha</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Feather
              name="lock"
              size={20}
              color={theme.colors.text500}
            />

            <TextInput
              style={styles.inputField}
              placeholder="Nova senha"
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
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.primaryButtonText}>
            Redefinir
          </Text>
        </RectButton>
      </View>
    </View>
  )
}
