import React from "react"
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import { MapView, Permissions } from 'expo'
import {Modal, Text, View, Image, Button, ActivityIndicator} from 'react-native'

import {markerListRequest} from "../models/marker/actions"


class RootContainer extends React.PureComponent<null> {

  static navigationOptions = {
     title: 'Welcome',
  }

  state = {
    hasCameraPermission: null,
    modalVisible: false,
    imageLoading: false,
  }

  componentDidMount() {
    const { status } = Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' })
    this.props.markerListRequest()
  }

  showModal = (title, description, photo) => {
    this.setState({imageLoading: true})
    this.setState({modalVisible:true, currentVecerkaTitle: title, currentVecerkaDescription: description, currentVecerkaPhoto: photo })
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <React.Fragment>

      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible:false})
          }}
          >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{this.state.currentVecerkaTitle}</Text>
              <Text>{this.state.currentVecerkaDescription}</Text>
                  <ActivityIndicator size="large" color="#0000ff" animating={this.state.imageLoading}/>
                  <Image
                    onLoadEnd={(e) => this.setState({imageLoading: false})}
                    style={{width: 500, height: 500}}
                    source={{uri: this.state.currentVecerkaPhoto}}
                  />
            </View>
        </Modal>

        <MapView
            style={{ flex: 1 }}
              region={{latitude: 50.0755381,
                  longitude: 14.4378005,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421}}
            >

              {!isEmpty(this.props.markers) && this.props.markers.map(marker => (
                <MapView.Marker
                  key={marker.id}
                  coordinate={{latitude: Number(marker.latitude), longitude: Number(marker.longitude)}}
                  title={marker.title}
                  description={marker.description}
                  onPress={() => this.showModal(marker.title, marker.description, marker.photo)}
                />
              ))}
        </MapView>

        <Button
          title="Add Vecerka"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={() =>
              navigate('AddTitleAndDescriptionView', {})
          }
        />
    </React.Fragment>
    )
  }
}

export default connect(
    reduxState => ({
        markers: reduxState.markers.markerList,
    }),
    {markerListRequest}
)(RootContainer)
