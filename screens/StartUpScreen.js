import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import Header from "../components/Header";

export default class StartUpScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          title="How are you feeling??"
          navigation={this.props.navigation}
        />
        <View>
          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              this.props.navigation.navigate("TestPage");
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Take A Test
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 5,
  },
});
