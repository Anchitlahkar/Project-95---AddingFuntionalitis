import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import db from '../config';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: false,
    };
  }

  userLogin = (email, password) => {
    console.log('Login:  ' + email + ' : ' + password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Drawer');
      })
      .catch(function (error) {
        console.log(error);
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (email, password, confirmPassword) => {
    console.log('SignUp:  ' + email + ' : ' + password);

    if (password !== confirmPassword) {
      return alert('Check Your Password');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('Users').add({
            name: this.state.firstName + ' ' + this.state.lastName,
            contact: this.state.contact,
            address: this.state.address,
            email: this.state.user,
          });
          return alert('User Add Successfully', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch(function (error) {
          console.log(error);
          var errorMessage = error.message;
          return alert(errorMessage);
        });

      this.userLogin(email, password)
    }
  };

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={'First Name'}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Last Name'}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Contact'}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Address'}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Email'}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({
                    user: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Confrim Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />
              <View>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.user,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}>
                  <Text style={{ color: '#ff5722' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <br></br><br></br>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: '#bfe6ff' }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'black',
            padding: 8,
            color: 'yellow'
          }}>
          Login / Sign Up{' '}
        </Text>

        {this.showModal()}

        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="   User ID"
            onChangeText={(text) => {
              this.setState({
                user: text,
              });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="   Password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userLogin(this.state.user, this.state.password);
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 5 }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({
                isModalVisible: true,
              });
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 5,  }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputView: {
    marginTop: '8.8%',
    alignItems: 'center',
    height: '80%',
    backgroundColor: '#bfe6ff'
  },
  textInput: {
    backgroundColor: 'white',
    margin: 10,
    borderBottomWidth: 3.8,
    borderRadius: 20,
    width: '80%',
    height: '5%',
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    borderWidth:5
  },

  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: 'brown',
    margin: 50,
    fontWeight:'bold',
  },

  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: 'red',
    borderRadius: 10,
    borderBottomWidth: 3.5,
    marginTop: 20,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  registerButtonText: {
    color: '#ff5722',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
});
