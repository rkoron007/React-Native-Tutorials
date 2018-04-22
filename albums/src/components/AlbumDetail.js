import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Buttons";

const AlbumDetail = ({ album }) => {
  const {
    thumbnailContainerStyle,
    headerContentStyling,
    thumbnailStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: album.thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>

        <View style={headerContentStyling}>
          <Text style={headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: album.image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyling: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: { fontSize: 18 },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
