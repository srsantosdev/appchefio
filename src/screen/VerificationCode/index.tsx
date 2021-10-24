import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'

import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/theme';

const DEFAULT_TIME = 5 * 60
let countdownTimeout: NodeJS.Timeout

export const VerificationCode: React.FC = () => {
  const navigation = useNavigation<any>();

  const [time, setTime] = useState(DEFAULT_TIME)
  const [isActive, setIsActive] = useState(false)

  const startCountdown = useCallback(() => {
    setIsActive(true)
  }, [])

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout)

    setTime(DEFAULT_TIME)
    setIsActive(true)
  }, [])

  const minutes = useMemo(() => Math.floor(time / 60), [time])
  const seconds = useMemo(() => time % 60, [time])

  const [minuteLeft, minuteRight] = useMemo(() => {
    return String(minutes).padStart(2, '0').split('')
  }, [minutes])

  const [secondLeft, secondRight] = useMemo(() => {
    return String(seconds).padStart(2, '0').split('')
  }, [seconds])

  useEffect(() => {
    startCountdown()
  }, [startCountdown])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setIsActive(false)
    }

    return () => {
      clearTimeout(countdownTimeout)
    }
  }, [isActive, time])

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
        <Text style={styles.title}>Verifique seu e-mail</Text>
        <Text style={styles.subtitle}>Voce receberá um código por lá</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput 
            style={styles.smallInput}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput 
            style={styles.smallInput}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput 
            style={styles.smallInput}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput 
            style={styles.smallInput}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Código expira em: </Text>
          <Text style={styles.counter}>
            {minuteLeft}{minuteRight}:{secondLeft}{secondRight}
          </Text>
        </View>

        <RectButton 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.primaryButtonText}>
            Verificar
          </Text>
        </RectButton>
        <RectButton 
          style={styles.outlineButton}
          onPress={() => resetCountdown()}
        >
          <Text style={styles.outlineButtonText}>
            Enviar novamente
          </Text>
        </RectButton>
      </View>
    </View>
  )
}
