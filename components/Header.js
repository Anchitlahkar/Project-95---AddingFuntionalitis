import * as React from 'react';
import { View } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';

export default class MyHeader extends React.Component {

  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="white"
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "yellow", fontSize: 20, fontWeight: "bold" },
        }}
        backgroundColor="black"
      />
    );
  }
}
