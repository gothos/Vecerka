import {Button, View, TextInput} from "react-native";
import React from "react";

export default class AddTitleAndDescriptionContainer extends React.PureComponent<null> {
    static navigationOptions = {
        title: 'Adding Vecerka',
    }

    constructor(props) {
        super(props);
        this.state = {title: '', description: ''};
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
        <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder='Type title of vecerka - for example street (not required)'
              onChangeText={(title) => this.setState({title})}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={{height: 40, marginTop: 20}}
              placeholder='Type brief description of vecerka (not required)'
              onChangeText={(description) => this.setState({description})}
            />
            <Button
              style={{marginTop: 20}}
              title="Take photo of vecerka"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  navigate('CameraView', {...this.state})
              }
            />
      </View>
        )
    }
}
