import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet, View, Modal } from 'react-native'

export default class Info extends Component {
    state = {
        modalVisible: false,
    };


    showModal = (visible) => {
        this.setState({ modalVisible: visible });
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.showModal(!this.state.modalVisible)} >
                    <Text style={styles.text}>?</Text>
                </TouchableOpacity>
                <Modal
                    style={styles.modalContainer}
                    animationType='fade'
                    transparent={false}
                    visible={this.state.modalVisible}
                    animationInTiming={2000}
                    animationOutTiming={2000}>
                    <View >
                        <Text>oi</Text>
                    </View>
                </Modal>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 150,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 1,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        width: 35,
        textAlign: 'center',
        fontSize: 25
    },
    modalView: {
        backgroundColor: 'yellow'
    },
    modalContainer: {
        flex: 0

    }
})

