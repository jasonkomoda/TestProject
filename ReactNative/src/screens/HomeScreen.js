import React, { Component } from 'react';
import constants from '../config/constants'
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }

    componentDidMount() {
        fetch(`${constants.SERVER}:${constants.PORT}/users`)
            .then(response => {
                console.log(response);
                response.json();   
            })
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) =>
        <TouchableOpacity style={styles.list}>
            <Text style={styles.lightText}>{data.item.created_date}</Text>
            <Text style={styles.lightText}>{data.item.username}</Text>
            <Text style={styles.lightText}>{data.item.role}</Text>
            <Text style={styles.lightText}>{data.item.status}</Text>
        </TouchableOpacity>

    render() {
        const { navigate } = this.props.navigation

        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }

        return (
            <ScrollView style={{ padding: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item._id.toString()}
                />
                <Button
                    onPress={() => navigate("Login", { screen: "Login" })}
                    title="Logout"
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});