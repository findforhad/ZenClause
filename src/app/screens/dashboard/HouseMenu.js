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
        style={[
          {
            backgroundColor: "#5e8ac6",
            borderRadius: 4,
            borderColor: "#000000",
            borderWidth: 2,
            width: "50%",

            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            paddingVertical: 18,
            paddingHorizontal: 10
          },
          styles.height("60%")
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{
              width: "48%",
              height: 72,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 4
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
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 72 }
                ]}
              >
                INVITE
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "48%",
              height: 72,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 4
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
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 72 }
                ]}
              >
                MOVE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            style={{
              width: "48%",
              height: 72,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 4
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
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 72 }
                ]}
              >
                ADD
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "48%",
              height: 72,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 4
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
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 72 }
                ]}
              >
                DELETE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            style={{
              width: "48%",
              height: 72,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 4
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
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 72 }
                ]}
              >
                NEXT
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "48%",
              height: 72,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 4
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
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 72 }
                ]}
              >
                CANCEL
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HouseMenu;
