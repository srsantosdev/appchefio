import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 96,
    paddingHorizontal: 32,
  },
  gobackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  containerTitles: {
    marginTop: 24,
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
  smallInput: {
    flexDirection: 'row',
    textAlign: 'center',

    height: 72,
    width: 72,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    fontSize: 34,
    fontFamily: theme.fonts.text700,
    color: theme.colors.text500,
  },
  content: {
    paddingHorizontal: 24,
  },
  form: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  primaryButton: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 56 / 2,
    marginTop: 24,
  },
  primaryButtonText: {
    fontFamily: theme.fonts.text700,
    fontSize: 15,
    color: theme.colors.white,
  },
  outlineButton: {
    width: '100%',
    backgroundColor: 'transparent',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 56 / 2,
    marginTop: 24,
    borderWidth: 1,
    borderColor: theme.colors.text300,
  },
  outlineButtonText: {
    fontFamily: theme.fonts.text700,
    fontSize: 15,
    color: theme.colors.text300,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  counterText: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.text300,
  },
  counter: {
    fontFamily: theme.fonts.text700,
    fontSize: 15,
    color: theme.colors.red500,
  }
})