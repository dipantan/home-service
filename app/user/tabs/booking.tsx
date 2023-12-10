import { StyleSheet,  View, Text, ScrollView } from 'react-native'
import React from 'react'

const orders = () => {
  const bookingsData = [
    { id: '1', bookingBy: 'John Doe', status: 'Confirmed' },
    { id: '2', bookingBy: 'Alice Smith', status: 'Pending' },
    // Add more bookings as needed
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>My Bookings</Text>
      {bookingsData.map((booking) => (
        <View key={booking.id} style={styles.bookingContainer}>
          <Text style={styles.bookingId}>Booking ID: {booking.id}</Text>
          <Text style={styles.bookingDetails}>Booked By: {booking.bookingBy}</Text>
          <Text style={styles.bookingDetails}>Status: {booking.status}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default orders

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '90%',
  },
  bookingId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookingDetails: {
    fontSize: 16,
    marginBottom: 3,
  },
})