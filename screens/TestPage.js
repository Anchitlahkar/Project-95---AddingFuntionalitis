import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import CheckBoxScreen from "../components/CheckBox";

export default class TestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNo: 1,
    };
  }
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="white"
              onPress={() => {
                this.props.navigation.navigate("Drawer");
              }}
            />
          }
          centerComponent={{
            text: "Test",
            style: { color: "yellow", fontSize: 20, fontWeight: "bold" },
          }}
          backgroundColor="black"
        />
        <View>
            <CheckBoxScreen
            question="When i'm around people, I still struggle feeling alone"
            answere1="All The Time"
            answere2="Sometimes"
            answere3="Not Really, no"
          />
        </View>

        <TouchableOpacity
          style={[styles.button, {marginLeft: '25%'}]}
          onPress={() => {
            const questionNo = this.state.questionNo;
            this.setState({
              questionNo: questionNo + 1,
            });
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
            Submit
          </Text>
        </TouchableOpacity>
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
    marginTop: 5,
    borderWidth: 5,
  },
});
