import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';



export default class Timer extends Component {

    state = {
        minutes: '25',
        seconds: '00',
        interval: ''
    }


    pad = (d) => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }


    timer = () => {

        let { minutes, seconds } = this.state;




        if (seconds === '00') {
            this.setState({
                minutes: this.pad(minutes - 1),
                seconds: 59

            })
        } else {
            this.setState({
                seconds: this.pad(seconds - 1)
            })
        }



    }

    start = () => {
        if (!this.state.interval) {
            console.log('clicado')
            this.timer();
            let myInterval = setInterval(this.timer, 1000)
            this.setState({
                interval: myInterval
            })

        }



    }

    reset = () => {
        
        if (this.state.interval) {
            clearInterval(this.state.interval);
        }
        this.setState({
            minutes: '25',
            seconds: '00',
            interval: false
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timer}>{this.state.minutes}:{this.state.seconds}</Text>

                <View style={styles.buttonscontainer}>
                    <TouchableOpacity onPress={this.start} >
                        <Text
                            style={styles.button}  >
                            Start
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.reset}>
                        <Text
                            style={styles.button}>
                            Stop
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    buttonscontainer: {
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 10
    },
    button: {
        marginTop: 20,
        padding: 7,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: 60,
        alignSelf: 'stretch',
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 10,
    },
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        backgroundColor: 'red',
    },
    timer: {
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        width: 200,
        fontSize: 40,
    }
});