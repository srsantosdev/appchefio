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
})