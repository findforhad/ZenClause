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
            height: 290,
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 10
          }
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12
          }}
        >
          <TouchableOpacity
            style={{
              width: "49%",
              height: 70,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 3
            }}
            onPress={() => console.log("Invite Method Called")}
          >
            <LinearGradient
              colors={["#20bbd4", "#97ccd4", "#71c6d4"]}
              style={{
                alignItems: "center",
                flex: 1
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 70 }
                ]}
              >
                INVITE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "49%",
              height: 70,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 3
            }}
            onPress={() => console.log("Invite Method Called")}
          >
            <LinearGradient
              colors={["#32a5ff", "#76c3ff", "#9ad2ff"]}
              style={{
                alignItems: "center",
                flex: 1
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 70 }
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
            justifyContent: "space-between",
            marginBottom: 13
          }}
        >
          <TouchableOpacity
            style={{
              width: "49%",
              height: 70,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 3
            }}
            onPress={() => console.log("Invite Method Called")}
          >
            <LinearGradient
              colors={["#a2b224", "#a2b224", "#a2b224"]}
              style={{
                alignItems: "center",
                flex: 1
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 70 }
                ]}
              >
                DELETE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "49%",
              height: 70,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 3
            }}
            onPress={() => console.log("Invite Method Called")}
          >
            <LinearGradient
              colors={["#f9622d", "#f9622d", "#f9622d"]}
              style={{
                alignItems: "center",
                flex: 1
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 70 }
                ]}
              >
                ADD
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 3
            }}
            onPress={() => console.log("Invite Method Called")}
          >
            <LinearGradient
              colors={["#fcbc30", "#fcbc30", "#fcbc30"]}
              style={{
                alignItems: "center",
                flex: 1
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 70 }
                ]}
              >
                CANCEL
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 3,
              height: 60
            }}
            onPress={() => console.log("Invite Method Called")}
          >
            <LinearGradient
              colors={["#c42222", "#c42222", "#c42222"]}
              style={{
                alignItems: "center",
                flex: 1
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  { textAlign: "center", lineHeight: 70 }
                ]}
              >
                NEXT
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* { //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: "row",
      //       justifyContent: "space-around",
      //       height: 90
      //     }}
      //   >
      //     <TouchableOpacity
      //       style={{
      //         width: "48%",
      //         height: 90,
      //         borderColor: "black",
      //         borderWidth: 2,
      //         borderRadius: 4
      //       }}
      //       onPress={() => console.log("Invite Method Called")}
      //     >
      //       <LinearGradient
      //         colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
      //         style={{
      //           alignItems: "center",
      //           flex: 1
      //         }}
      //       >
      //         <Text
      //           style={[
      //             styles.btnText,
      //             { textAlign: "center", lineHeight: 90 }
      //           ]}
      //         >
      //           INVITE
      //         </Text>
      //       </LinearGradient>
      //     </TouchableOpacity>
      //     <TouchableOpacity
      //       style={{
      //         width: "48%",
      //         height: 90,
      //         borderColor: "black",
      //         borderWidth: 2,
      //         borderRadius: 4
      //       }}
      //       onPress={() => console.log("Invite Method Called")}
      //     >
      //       <LinearGradient
      //         colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
      //         style={{
      //           alignItems: "center",
      //           flex: 1
      //         }}
      //       >
      //         <Text
      //           style={[
      //             styles.btnText,
      //             { textAlign: "center", lineHeight: 90 }
      //           ]}
      //         >
      //           INVITE
      //         </Text>
      //       </LinearGradient>
      //     </TouchableOpacity>
      //   </View>
      //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: "row",
      //       justifyContent: "space-around",
      //       height: 90,
      //       marginTop: 10
      //     }}
      //   >
      //     <TouchableOpacity
      //       style={{
      //         width: "48%",
      //         height: 90,
      //         borderColor: "black",
      //         borderWidth: 2,
      //         borderRadius: 4
      //       }}
      //       onPress={() => console.log("Invite Method Called")}
      //     >
      //       <LinearGradient
      //         colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
      //         style={{
      //           alignItems: "center",
      //           flex: 1
      //         }}
      //       >
      //         <Text
      //           style={[
      //             styles.btnText,
      //             { textAlign: "center", lineHeight: 90 }
      //           ]}
      //         >
      //           INVITE
      //         </Text>
      //       </LinearGradient>
      //     </TouchableOpacity>
      //     <TouchableOpacity
      //       style={{
      //         width: "48%",
      //         height: 90,
      //         borderColor: "black",
      //         borderWidth: 2,
      //         borderRadius: 4
      //       }}
      //       onPress={() => console.log("Invite Method Called")}
      //     >
      //       <LinearGradient
      //         colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
      //         style={{
      //           alignItems: "center",
      //           flex: 1
      //         }}
      //       >
      //         <Text
      //           style={[
      //             styles.btnText,
      //             { textAlign: "center", lineHeight: 90 }
      //           ]}
      //         >
      //           INVITE
      //         </Text>
      //       </LinearGradient>
      //     </TouchableOpacity>
      //   </View>

      //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: "row",
      //       justifyContent: "space-around"
      //     }}
      //   >
      //     <TouchableOpacity
      //       style={{
      //         width: "98%",
      //         height: 50,
      //         borderColor: "black",
      //         borderWidth: 2,
      //         borderRadius: 4
      //       }}
      //       onPress={() => console.log("Invite Method Called")}
      //     >
      //       <LinearGradient
      //         colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
      //         style={{
      //           alignItems: "center",
      //           flex: 1
      //         }}
      //       >
      //         <Text
      //           style={[
      //             styles.btnText,
      //             { textAlign: "center", lineHeight: 50 }
      //           ]}
      //         >
      //           INVITE
      //         </Text>
      //       </LinearGradient>
      //     </TouchableOpacity>
      //   </View>} */}
      </View>
    );
  }
}

export default HouseMenu;
