import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  nameBox: {
    height: 48,
    width: 380,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 12,
    marginTop: 10,
    flexDirection:"row",
    alignItems: "center",
    
  },
  name:{
      fontSize: 18,
      fontWeight: "bold",
      marginLeft:75,
      marginRight:"auto",      
  },
  description:{
      fontSize: 18,
  },
});

export default styles
