import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  CheckBox,
} from "react-native";
import { RadioButton } from "react-native-paper";

export default class CheckBoxScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected1: false,
      isSelected2: false,
      isSelected3: false,
      totalPoints: 0,
    };
  }
  render() {
    console.log(this.state.totalPoints);
    return (
      <View>
        <Text style={{margin: 10,fontSize: 20, fontWeight: "bold"}}>{this.props.question}</Text>

        {/* Question 1 */}

        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <RadioButton
                value={true}
                status={
                  this.state.isSelected1 === true ? "checked" : "unchecked"
                }
                onPress={() => {
                  var isSelected1 = this.state.isSelected1;
                  const defaultPoints = this.state.totalPoints;
                  var totalPoints = defaultPoints + 1;
                  this.setState({
                    isSelected1: !isSelected1,
                    isSelected2: false,
                    isSelected3: false,
                    isSelected4: false,
                  });

                  !this.state.isSelected1 === true
                    ? this.setState({ totalPoints: totalPoints })
                    : this.setState({ totalPoints: defaultPoints });
                }}
              />
            </View>
            <Text style={{ marginLeft: "-40%", marginTop: 10 }}>
              {this.props.answere1}
            </Text>
          </View>

          {/* Question 2 */}

          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <RadioButton
                value={true}
                status={
                  this.state.isSelected2 === true ? "checked" : "unchecked"
                }
                onPress={() => {
                  var isSelected2 = this.state.isSelected2;
                  const defaultPoints = this.state.totalPoints;
                  var totalPoints = defaultPoints + 2;
                  this.setState({
                    isSelected1: false,
                    isSelected2: !isSelected2,
                    isSelected3: false,
                    isSelected4: false,
                  });
                  !this.state.isSelected2 === true
                    ? this.setState({ totalPoints: totalPoints })
                    : this.setState({ totalPoints: defaultPoints });
                }}
              />
            </View>
            <Text style={{ marginLeft: "-40%", marginTop: 10 }}>{this.props.answere2}</Text>
          </View>

          {/* Question 3 */}

          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <RadioButton
                value={true}
                status={
                  this.state.isSelected3 === true ? "checked" : "unchecked"
                }
                onPress={() => {
                  var isSelected3 = this.state.isSelected3;
                  const defaultPoints = this.state.totalPoints;
                  var totalPoints = defaultPoints + 3;
                  this.setState({
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: !isSelected3,
                    isSelected4: false,
                  });
                  !this.state.isSelected3 === true
                    ? this.setState({ totalPoints: totalPoints })
                    : this.setState({ totalPoints: defaultPoints });
                }}
              />
            </View>
            <Text style={{ marginLeft: "-40%", marginTop: 10 }}>
            {this.props.answere3}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
