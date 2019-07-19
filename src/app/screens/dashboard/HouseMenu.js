import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Button, Content } from "native-base";
import CoverImage from "../../../../assets/images/cover.png";
import Profile from "../../../../assets/images/profile.png";
import { styles } from "./styles";
import { LinearGradient } from "expo";

class HouseMenu extends React.Component {
  render() {
    let { uid, neighborID } = this.props;
    return (
      <View
        style={{
          backgroundColor: "#5e8ac6",
          padding: 10,
          borderRadius: 4,
          borderColor: "#000000",
          borderWidth: 2,
          width: "50%",
          height: 400,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <TouchableOpacity
          style={{
            width: "48%",
            height: 60,
            borderColor: "black",
            borderWidth: 2
          }}
          onPress={() => console.log("Invite Method Called")}
        >
          <LinearGradient
            colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
            style={{
              alignItems: "center",
              flex: 1
            }}
          >
            <Text
              style={[styles.btnText, { textAlign: "center", lineHeight: 60 }]}
            >
              INVITE
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "48%",
            height: 60,
            borderColor: "black",
            borderWidth: 2
          }}
          onPress={() => console.log("Move Method Called")}
        >
          <LinearGradient
            colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
            style={{
              alignItems: "center",
              flex: 1
            }}
          >
            <Text
              style={[styles.btnText, { textAlign: "center", lineHeight: 60 }]}
            >
              MOVE
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HouseMenu;
