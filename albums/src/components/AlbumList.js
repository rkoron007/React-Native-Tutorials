import React from "react";
import { ScrollView, Fetch } from "react-native";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;