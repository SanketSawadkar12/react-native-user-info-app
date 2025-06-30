import React from "react";
import { StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";

export default function UserActions() {
  return (
    <Card style={styles.card}>
      <Card.Title title="Actions" />
      <Card.Content>
        <Button
          mode="contained"
          icon="pencil"
          style={styles.button}
          onPress={() => {}}
        >
          Edit
        </Button>
        <Button
          mode="contained"
          icon="message"
          style={styles.button}
          onPress={() => {}}
        >
          Message
        </Button>
        <Button
          mode="contained"
          icon="delete"
          style={[styles.button, { backgroundColor: "#E53935" }]}
          onPress={() => {}}
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    elevation: 3,
  },
  button: {
    marginVertical: 8,
  },
});
