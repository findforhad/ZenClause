import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dFlex: {
    flex: 1
  },
  width: v => ({
    width: v
  }),
  height: v => ({
    height: v
  }),
  fontSize: v => ({
    fontSize: v
  }),
  userName: {
    fontSize: 12,
    fontWeight: "bold"
  },
  modalContent: {
    backgroundColor: "#5e8ac6",
    padding: 10,
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 2,
    width: "50%",
    height: 700
  },
  menuModalContent: {
    backgroundColor: "#5e8ac6",
    padding: 10,
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 2,
    width: "50%",
    height: 400
  },
  topBoxContainer: {
    backgroundColor: "#222222",
    height: "60%",
    padding: 5
  },
  IMtopBoxContainer: {
    backgroundColor: "#222222",
    height: "75%",
    padding: 5
  },
  topBox: {
    flexDirection: "row"
  },
  bottomBox: {
    flexDirection: "column",
    marginTop: 10
  },
  menubottomBox: {
    flexDirection: "column",
    marginTop: 10,
    flex: 1
  },
  coverContainer: {},
  cover: {
    width: 140,
    height: 140
  },
  messages: {
    padding: 5,
    flexDirection: "column"
  },
  message: {
    backgroundColor: "red",
    padding: 5
  },
  msgItem: {
    flexDirection: "row",
    marginBottom: 10
  },
  firstButtons: {
    flexDirection: "row"
  },
  secondButtons: {
    flexDirection: "row",
    marginTop: 2
  },
  btn: {
    padding: 20,
    borderColor: "#000000",
    borderWidth: 2
  },
  btnText: {
    fontWeight: "700",
    textTransform: "uppercase"
  },
  btnBg: color => ({
    backgroundColor: color
  }),
  like: {
    marginLeft: 2,
    marginRight: 2
  },
  add: {
    marginLeft: 2,
    marginRight: 2
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 100
  },
  sendIM: {
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10
  },

  postContainer: {
    height: 200,
    backgroundColor: "#fff",
    padding: 10
  },
  postBox: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#eee",
    width: "100%",
    marginBottom: 10
  },
  postSendBtn: {
    padding: 10,
    width: 100
  }
});
