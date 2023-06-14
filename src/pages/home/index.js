import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FeedItem } from "../../components/FeedItem";

const { height: heightScreen } = Dimensions.get("screen");

export function Home() {
  let feedItems = [
    {
      id: "1",
      video: "https://i.imgur.com/q60lwUc.mp4",
      name: "@DumpsterKoala",
      description:
        "Graphics on this new Mirror's Edge look wild! Must be after a timeskip, Faith Connors has really grown her hair out.",
      likes: "1k",
      comments: "1.3k",
    },
    {
      id: "2",
      video: "https://i.imgur.com/2P3WZ0A.mp4",
      name: "@wilagames",
      description: "Lancelot Battlemech LNC25-NRF variant.",
      likes: "8k",
      comments: "8.3k",
    },
    {
      id: "3",
      video: "https://i.imgur.com/iTP8sli.mp4",
      name: "@ScenicCuriosities",
      description: "I made this Pokémon diorama.",
      likes: "7k",
      comments: "100.3k",
    },
    {
      id: "4",
      video: "https://i.imgur.com/1Emp5XP.mp4",
      name: "@ScenicCuriosities",
      description: "VICTORIA FALLS | Zambia | Zimbabwe",
      likes: "7k",
      comments: "100.3k",
    },
    {
      id: "5",
      video: "https://i.imgur.com/a2NeHKJ.mp4",
      name: "@manolocarvalho",
      description: "Test App",
      likes: "7k",
      comments: "100.3k",
    },
  ];

  const [showItem, setShowItem] = useState(feedItems[0]);
  const onViewCurrent = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index]);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#ddd" }]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#fff" }]}>Pra você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => (
          <FeedItem data={item} currentItem={showItem} />
        )}
        onViewableItemsChanged={onViewCurrent.current}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 55,
    zIndex: 99,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  indicator: {
    backgroundColor: "#fff",
    width: 38,
    height: 2,
    alignSelf: "center",
  },
});
