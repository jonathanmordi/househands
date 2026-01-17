import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Househands</Text>
          <Text style={styles.subtitle}>Lekki's #1 Home Service App</Text>
        </View>

        {/* Selection Area */}
        <View style={styles.selectionContainer}>
          {/* CLIENT OPTION */}
          <TouchableOpacity
            style={[styles.card, styles.clientCard]}
            onPress={() => alert("Client flow coming soon!")}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.emoji}>🏠</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>I need Help</Text>
              <Text style={styles.cardSub}>
                Hire a verified Chef, Nanny, or Gateman.
              </Text>
            </View>
          </TouchableOpacity>

          {/* WORKER OPTION */}
          <TouchableOpacity
            style={[styles.card, styles.workerCard]}
            onPress={() => alert("Worker flow coming soon!")}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.emoji}>🔨</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>I want to Work</Text>
              <Text style={styles.cardSub}>
                Find jobs in your area and get paid.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "#1A1A1A",
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginTop: 8,
    fontWeight: "500",
  },
  selectionContainer: {
    paddingHorizontal: 24,
    gap: 20,
  },
  card: {
    flexDirection: "row",
    padding: 24,
    borderRadius: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4, // For Android shadow
    backgroundColor: "#FFF",
  },
  clientCard: {
    borderLeftWidth: 6,
    borderLeftColor: "#007AFF", // Blue
  },
  workerCard: {
    borderLeftWidth: 6,
    borderLeftColor: "#34C759", // Green
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F2F5",
    borderRadius: 15,
    marginRight: 16,
  },
  emoji: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    color: "#888",
    lineHeight: 20,
  },
});
