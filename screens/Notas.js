import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Notas(props) {
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => props.navigation.navigate("Crear")}
        >
          <Text style={styles.textoBoton}>Agregar una nueva Nota</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#3E4095",
    borderColor: "#6589BA",
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  textoBoton: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
});
