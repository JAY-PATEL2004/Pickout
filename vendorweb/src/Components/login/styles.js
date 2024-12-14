import { StyleSheet } from 'react-native';
import { colors } from '../../utilities';  // Ensure this is correctly imported

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topContainer: {
    backgroundColor: colors.white,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bgColor: {
    backgroundColor: colors.white,
  },
  lowerContainer: {
    backgroundColor: colors.green,
    flex: 7,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-around',
    padding: 20,
  },
  headingText: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputStyle: {
    borderBottomWidth: 0,
    borderRadius: 8,
    height: 50,
    width: '90%',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.white,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
