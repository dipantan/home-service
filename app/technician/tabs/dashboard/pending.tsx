import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import _ from "lodash";
import OrderCard from "../../../../components/orderCardPending";

const Pending = () => {
  const bookings = [
    {
      id: "34r34f34ff43f3f",
      name: "Rohan",
      date: new Date(),
      service: "Electric",
    },
    {
      id: "34r34f34ff43f3f3",
      name: "Rohan",
      date: new Date(),
      service: "Electric",
    },
    {
      id: "34r34f34ff43f3f5",
      name: "Rohan",
      date: new Date(),
      service: "Electric",
    },
    {
      id: "34r34f34ff43f3f7",
      name: "Rohan",
      date: new Date(),
      service: "Electric",
    },
    {
      id: "34r34f34ff43f3f78",
      name: "Rohan",
      date: new Date(),
      service: "Electric",
    },
  ];

  return (
    <FlatList
      data={bookings}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <OrderCard
            date={item.date}
            orderId={item.id}
            serviceType={item.service}
            userName={item.name}
            key={item.id}
          />
        );
      }}
    />
  );
};

export default Pending;

const styles = StyleSheet.create({});
