import React from "react";
import {
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import { width, colors } from "../../utils";
import { twitterMessages } from "../../mock";

import NavigationWraper from "../../components/NavigationWraper";
import Tweet from "./Tweet";

class Home extends React.Component {
  render() {
    return (
      <NavigationWraper
        navigation={this.props.navigation}
        selected={0}
        rightIcon={
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../assets/topStar.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              fontFamily: "HelveticaNeue-Bold"
            }}
          >
            {"Home"}
          </Text>
        }
      >
        <ScrollView style={styles.container}>
          {twitterMessages.map((i, n) => (
            <TouchableHighlight key={n.toString()} activeOpacity={0.4}>
              <Tweet data={i} />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </NavigationWraper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white
  }
});

export default Home;
