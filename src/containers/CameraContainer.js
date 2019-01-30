import {Camera, Constants, Location, Permissions} from "expo";
import {Button, Text, TouchableOpacity, View, Platform, ActivityIndicator} from "react-native";
import React from "react";
import FormData from 'form-data'
import uuid4 from 'uuid4'
import connect from "react-redux/es/connect/connect";
import {addMarkerRequest} from "../models/marker/actions";

class CameraContainer extends React.PureComponent<null> {

    static navigationOptions = {
        title: 'Take photo of vecerka',
    };

    state = {
        type: Camera.Constants.Type.back,
        photoId: '',
        errorMessage: null,
    }

    componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            })
        } else {
            this._getLocationAsync();
        }
    }

    snap = async () => {
      if (this.camera && this.state.location) {
        let photo = await this.camera.takePictureAsync({})
        const data = new FormData();
        data.append('title', this.props.navigation.state.params.title); // you can append anyone.
        data.append('description', this.props.navigation.state.params.description); // you can append anyone.
        data.append('longitude', this.state.location.coords.longitude); // you can append anyone.
        data.append('latitude', this.state.location.coords.latitude); // you can append anyone.
        data.append('photo', {
          uri: photo.uri,
          type: 'image/jpeg', // or photo.type
          name: `${uuid4()}.jpeg`,
        })
        this.props.addMarkerRequest(data, this.props.navigation)
      }
    }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }

    render() {
        if (!!this.props.loading){
            return (<ActivityIndicator size="large" color="#0000ff" animating={!!this.props.loading}/>)
        } else {
            return (
                <View style={{flex: 1}}>

                    <Camera style={{flex: 1}} type={this.state.type} ref={ref => {
                        this.camera = ref;
                    }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {

                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });

                                }}>
                                <Text
                                    style={{fontSize: 18, marginBottom: 10, color: 'white'}}>
                                    {' '}Flip{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                    <Button
                        title="SNAP"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={() =>
                            this.snap()
                        }
                    />
                </View>
            )
        }
    }
}


export default connect(
    reduxState => ({
        loading: reduxState.loadings.ADD_MARKER,
    }),
    {addMarkerRequest}
)(CameraContainer)
