import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { User } from "../api/userApi";

type Props = {
  users: User[];
  selectedUser: User | null;
  onSelect: (user: User) => void;
};

export default function UserList({ users, selectedUser, onSelect }: Props) {
  return (
    <Card style={styles.card}>
      <Card.Title title="Users" />
      <Card.Content>
        {users.map((user) => (
          <TouchableOpacity
            key={user.id}
            style={[
              styles.item,
              selectedUser?.id === user.id && styles.itemActive,
            ]}
            onPress={() => onSelect(user)}
          >
            <Text
              style={[
                styles.text,
                selectedUser?.id === user.id && styles.textActive,
              ]}
            >
              {user.name}
            </Text>
          </TouchableOpacity>
        ))}
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
  item: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginVertical: 6,
  },
  itemActive: {
    backgroundColor: "#6200ee",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  textActive: {
    color: "#fff",
    fontWeight: "bold",
  },
});
