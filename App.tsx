import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import {
  Appbar,
  IconButton,
  ActivityIndicator,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { fetchUsers, User } from "./src/api/userApi";
import UserList from "./src/components/UserList";
import UserDetails from "./src/components/UserDetails";
import UserActions from "./src/components/UserActions";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <MainContent />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

function MainContent() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [detailsTab, setDetailsTab] = useState<"profile" | "contact">("profile");
  const [leftVisible, setLeftVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setSelectedUser(data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <IconButton
          icon="menu"
          size={24}
          onPress={() => setLeftVisible(!leftVisible)}
        />
        <Appbar.Content title="User Management" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scroll}>
        {loading ? (
          <ActivityIndicator animating size="large" />
        ) : (
          <View
            style={[styles.row, isSmallScreen && { flexDirection: "column" }]}
          >
            {(!isSmallScreen || leftVisible) && (
              <UserList
                users={users}
                selectedUser={selectedUser}
                onSelect={(user) => {
                  setSelectedUser(user);
                  setDetailsTab("profile");
                }}
              />
            )}
            <UserDetails
              user={selectedUser}
              detailsTab={detailsTab}
              onTabChange={setDetailsTab}
            />
            <UserActions />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  scroll: { padding: 8 },
  row: { flexDirection: "row", justifyContent: "space-between" },
});
  