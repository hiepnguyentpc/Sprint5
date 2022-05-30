import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  nameBox: {
    height: 48,
    width: 380,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 12,
    marginTop: 0,
    flexDirection:"row",
    alignItems: "center",
    
  },
  name:{
      fontSize: 18,
      fontWeight: "bold",
      marginLeft:110,
      marginRight:"auto",

  },
  description:{
      fontSize: 18,
      
  },
  contentBox:{
    height: 150,
    backgroundColor:"#F9F9F9"
  },
  TextInputBox:{
    
  }
});

export default styles
