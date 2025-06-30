import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, ToggleButton } from "react-native-paper";
import { User } from "../api/userApi";

type Props = {
  user: User | null;
  detailsTab: "profile" | "contact";
  onTabChange: (tab: "profile" | "contact") => void;
};

export default function UserDetails({ user, detailsTab, onTabChange }: Props) {
  if (!user) return null;

  return (
    <Card style={[styles.card, { flex: 2 }]}>
      <Card.Title title="User Details" />
      <Card.Content>
        <ToggleButton.Row
          onValueChange={(value) =>
            onTabChange(value as "profile" | "contact")
          }
          value={detailsTab}
          style={{ marginBottom: 16 }}
        >
          <ToggleButton icon="account" value="profile" />
          <ToggleButton icon="contacts" value="contact" />
        </ToggleButton.Row>

        {detailsTab === "profile" ? (
          <>
            <Text style={styles.text}>👤 Name: {user.name}</Text>
            <Text style={styles.text}>🏠 Address: {user.address}</Text>
            <Text style={styles.text}>🎂 DOB: {user.dob}</Text>
          </>
        ) : (
          <>
            <Text style={styles.text}>📞 Mobile: {user.mobile}</Text>
            <Text style={styles.text}>💬 Skype: {user.skype}</Text>
            <Text style={styles.text}>✉️ Email: {user.email}</Text>
          </>
        )}
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
  text: {
    fontSize: 16,
    marginVertical: 6,
  },
});
