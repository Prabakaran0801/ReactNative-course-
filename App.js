import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  function taskInputHandler(text) {
    setTaskText(text);
  }

  function taskButtonHndler() {
    setTasks((currenttasks) => [...currenttasks, taskText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your Task"
          onChangeText={taskInputHandler}
        />
        <Button title="Add Task" onPress={taskButtonHndler} />
      </View>
      <View style={styles.taskContainer}>
        {tasks.map((task) => (
          <View style={styles.taskItem} key={task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#aed6dc",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#4a536b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#4a536b",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  taskContainer: {
    flex: 5,
    paddingTop: 10,
  },
  taskItem: {
    margin: 6,
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#ff9a8d",
  },
  taskText: {
    color: "white",
  },
});
