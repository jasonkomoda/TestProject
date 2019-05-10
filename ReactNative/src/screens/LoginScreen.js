import React, { Component } from 'react';
import { View, Text, TextInput } from "react-native";
import { Card, Button } from "react-native-elements";

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: "Login Page"
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <Text>Email</Text>
                    <TextInput placeholder="Email address..." />
                    <Text>Password</Text>
                    <TextInput secureTextEntry placeholder="Password..." />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={() => navigate("Home", {screen: "Home"})}
                    />
                </Card>
            </View>
        )
    }
}