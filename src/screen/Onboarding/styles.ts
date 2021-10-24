import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: getBottomSpace(),
  },
  image: {
    width: '100%',
    marginTop: getStatusBarHeight(),
  },
  content: {
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 24
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.text700,
    color: theme.colors.text500,
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    fontFamily: theme.fonts.text500,
    color: theme.colors.text300,
    marginTop: 16,
    paddingHorizontal: 64,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    marginTop: 72,
    borderRadius: 56 / 2
  },
  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text700,
    fontSize: 15,
  },
})