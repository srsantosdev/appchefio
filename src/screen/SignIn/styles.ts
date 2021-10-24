import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 22,
    color: theme.colors.text500,
  },
  subtitle: {
    fontFamily: theme.fonts.text500,
    fontSize: 17,
    color: theme.colors.text300,
    marginTop: 8,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',

    height: 56,
    borderRadius: 56 / 2,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    paddingHorizontal: 24,
  },
  inputField: {
    paddingLeft: 8,
    fontSize: 15,
    fontFamily: theme.fonts.text500
  },
  content: {
    paddingHorizontal: 24,
  },
  form: {
    marginTop: 32,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 24,
  },
  forgotPasswordButtonText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.text500,
    fontSize: 15,
  },
  formButtons: {
    marginTop: 72,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 56 / 2
  },
  primaryButtonText: {
    fontFamily: theme.fonts.text700,
    fontSize: 15,
    color: theme.colors.white,
  },
  dividerText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.text300,
    fontSize: 15,
    marginVertical: 24,
    alignSelf: 'center'
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.red500,
    height: 56,
    borderRadius: 56 / 2
  },
  socialLoginButtonText: {
    fontFamily: theme.fonts.text700,
    fontSize: 15,
    color: theme.colors.white,
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  signUpText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.text500,
    fontSize: 15,
  },
  highlightText: {
    fontFamily: theme.fonts.text700,
    color: theme.colors.primary,
    fontSize: 15,
    paddingLeft: 4,
  }
})