import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import PagerView from "react-native-pager-view";
import Colors from "../../../../constants/Colors";
import { useSelector } from "react-redux";
import { getUser } from "../../../../store/selectors";
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Pending from "./pending";
import Accepted from "./accepted";
import Completed from "./completed";

export default function TabViewExample() {
  const user = useSelector(getUser);
  const [isAvailable, setIsAvailable] = React.useState(false);
  const toggleSwitch = () => setIsAvailable((previousState) => !previousState);
  const Tabs = ["Pending", "Accepted", "Completed"];
  const [selectedTab, setSelctedTab] = React.useState(0);
  const pagerRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.textBold,
          {
            marginStart: responsiveScreenWidth(4),
            fontSize: responsiveScreenWidth(5),
          },
        ]}
      >
        Hi, {user.name}
      </Text>

      {/* status switch */}
      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.textBold,
            { color: isAvailable ? Colors.common.green : Colors.common.red },
          ]}
        >
          {isAvailable ? "Online" : "Offline"}
        </Text>
        <Switch
          trackColor={{ false: Colors.common.red, true: Colors.common.green }}
          onValueChange={toggleSwitch}
          value={isAvailable}
        />
      </View>

      {/* tabbar header */}
      <View style={styles.tabBar}>
        <FlatList
          horizontal
          contentContainerStyle={{
            columnGap: 8,
          }}
          data={Tabs}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: responsiveWidth(5),
                  backgroundColor:
                    selectedTab == index ? Colors.light.tint : "transparent",
                }}
                onPress={() => {
                  pagerRef?.current?.setPage(index);
                  setSelctedTab(index);
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color:
                      selectedTab == index
                        ? Colors.dark.text
                        : Colors.light.text,
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(event) => {
          setSelctedTab(event?.nativeEvent?.position);
        }}
      >
        <View key="1">
          <Pending />
        </View>
        <View key="2">
          <Accepted />
        </View>
        <View key="3">
          <Completed />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 8,
    rowGap: 8,
  },
  switchContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  textBold: {
    fontWeight: "bold",
    // marginStart: responsiveScreenWidth(4),
  },
  tabBar: {
    height: responsiveHeight(6),
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.light.tint,
    marginVertical: 8,
  },
  pagerView: {
    flex: 1,
  },
});
