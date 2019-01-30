import { Ionicons } from '@expo/vector-icons'
import {Text, View} from "react-native";
import React from "react";


export default class SuccessContainer extends React.PureComponent<null> {
    static navigationOptions = {
        title: 'Thank you',
    };

    componentDidMount() {
        setTimeout(()=> {
            const {navigate} = this.props.navigation;
            navigate('Root', {})
        }, 5000)
    }
    render(){
        return (
        <View style={{padding: 10}}>

          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Thank you
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </Text>
      </View>
        )
    }
}
