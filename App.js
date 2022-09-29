import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthyear, setBirthYear] = useState(null);
  const [people, setPeople] = useState([]);

  function compareFirstName(a, b) {
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
    return 0;
  }

  function addPerson() {
    if (
      people.findIndex(
        (item) =>
          item.firstName == firstname &&
          item.lastName == lastname &&
          item.birthYear == birthyear
      ) < 0
    ) {
      let newAddition = [
        { firstName: firstname, lastName: lastname, birthYear: birthyear },
        ...people,
      ];
      newAddition.sort(compareFirstName);
      setPeople(newAddition);
    } else {
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <Text>First Name:</Text>
      <TextInput
        style={{
          width: 250,
          height: 25,
          backgroundColor: "lightyellow",
          margin: "20px",
        }}
        onChangeText={(firstname) => setFirstName(firstname)}
      />
      <Text>Last Name:</Text>
      <TextInput
        style={{
          width: 250,
          height: 25,
          backgroundColor: "lightyellow",
          margin: "20px",
        }}
        onChangeText={(lastname) => setLastName(lastname)}
      />
      <Text>Birth Year:</Text>
      <TextInput
        style={{
          width: 250,
          height: 25,
          backgroundColor: "lightyellow",
          margin: "20px",
        }}
        onChangeText={(birthyear) => setBirthYear(birthyear)}
      />
      <Button title="Add person to list" onPress={addPerson} />
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Text style={{ margin: "10px" }}>
            {item.firstName} {item.lastName} {item.birthYear}
          </Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
