import React from "react";
import { Text, View, Image } from "react-native";
import { Button, Content } from "native-base";
import CoverImage from "../../../../assets/images/cover.png";
import Profile from "../../../../assets/images/profile.png";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import { LinearGradient } from "expo";

class RenderUserPanel extends React.Component {
  render() {
    let { uid, neighborID } = this.props;
    return (
      <View style={[styles.dFlex, styles.modalContent]}>
        <View style={[styles.topBoxContainer]}>
          <View style={[styles.dFlex, styles.topBox]}>
            <View style={[]}>
              <Image source={CoverImage} style={styles.cover} />
            </View>
            <ScrollView style={[styles.messages, styles.dFlex]}>
              <View style={[styles.msgItem, styles.dFlex]}>
                <View style={styles.width("20%")}>
                  <Image source={Profile} style={styles.profile} />
                </View>
                <View style={[styles.message, styles.width("80%")]}>
                  <Text style={styles.userName}>Sammy Jam</Text>
                  <Text>Message asmdfasdf asdfjlasjdlfjlsdjf</Text>
                </View>
              </View>
              <View style={[styles.msgItem, styles.dFlex]}>
                <View style={styles.width("20%")}>
                  <Image source={Profile} style={styles.profile} />
                </View>
                <View style={[styles.message, styles.width("80%")]}>
                  <Text style={styles.userName}>Sammy Jam</Text>
                  <Text>Message asmdfasdf asdfjlasjdlfjlsdjf</Text>
                </View>
              </View>
              <View style={[styles.msgItem, styles.dFlex]}>
                <View style={styles.width("20%")}>
                  <Image source={Profile} style={styles.profile} />
                </View>
                <View style={[styles.message, styles.width("80%")]}>
                  <Text style={styles.userName}>Sammy Jam</Text>
                  <Text>Message asmdfasdf asdfjlasjdlfjlsdjf</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <Content style={[styles.dFlex, styles.bottomBox]}>
          <View
            style={[
              styles.dFlex,
              styles.firstButtons,
              { justifyContent: "space-between" }
            ]}
          >
            <Button style={[styles.width("30%")]}>
              <LinearGradient
                colors={["#005fa6", "#0c8fd6", "#39bcd6"]}
                style={{
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 44
                }}
              >
                <Text
                  style={[
                    styles.btnText,
                    { textAlign: "center", lineHeight: 39 }
                  ]}
                >
                  INVITE
                </Text>
              </LinearGradient>
            </Button>

            <Button style={[styles.width("30%")]}>
              <LinearGradient
                colors={["#15397c", "#185fe2", "#6cb2e2"]}
                style={{
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 44
                }}
              >
                <Text
                  style={[
                    styles.btnText,
                    { textAlign: "center", lineHeight: 38 }
                  ]}
                >
                  LIKE
                </Text>
              </LinearGradient>
            </Button>

            <Button onPress={this.props.onCancel} style={[styles.width("38%")]}>
              <LinearGradient
                colors={["#805c1a", "#e68b00", "#e6c31e"]}
                style={{
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 44
                }}
              >
                <Text
                  style={[
                    styles.btnText,
                    { textAlign: "center", lineHeight: 38 }
                  ]}
                >
                  CANCEL
                </Text>
              </LinearGradient>
            </Button>
          </View>

          <View
            style={[
              styles.dFlex,
              styles.secondButtons,
              { justifyContent: "space-between" }
            ]}
          >
            <Button style={[styles.width("30%")]}>
              <LinearGradient
                colors={["#045000", "#499301", "#7dc836"]}
                style={{
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 44
                }}
              >
                <Text
                  style={[
                    styles.btnText,
                    { textAlign: "center", lineHeight: 38 }
                  ]}
                >
                  DELETE
                </Text>
              </LinearGradient>
            </Button>

            <Button style={[styles.width("30%")]}>
              <LinearGradient
                colors={["#803d1a", "#e63e00", "#e6a34b"]}
                style={{
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 44
                }}
              >
                <Text
                  style={[
                    styles.btnText,
                    { textAlign: "center", lineHeight: 38 }
                  ]}
                >
                  ADD
                </Text>
              </LinearGradient>
            </Button>

            <Button
              onPress={() => {
                if (uid === neighborID) {
                  this.props.openPostWindow();
                } else {
                  this.props.openIMWindow();
                }
              }}
              style={[styles.width("38%")]}
            >
              <LinearGradient
                colors={["#ff9999", "#f90f18", "#df0000"]}
                style={{
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 44
                }}
              >
                <Text
                  style={[
                    styles.btnText,
                    { textAlign: "center", lineHeight: 38 }
                  ]}
                >
                  {uid === neighborID ? "NEW POST" : "SEND IM"}
                </Text>
              </LinearGradient>
            </Button>
          </View>
        </Content>
      </View>
    );
  }
}

export default RenderUserPanel;
