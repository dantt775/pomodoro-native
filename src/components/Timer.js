import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';




export default class Timer extends Component {

    state = {
        minutes: '00',
        seconds: '03',
        interval: '',
        pomodoro: 0,
        color: 'red',
        break: false
    }


    pad = (d) => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }


    checkPomodoro = () => {
        if (this.state.pomodoro === 3 && this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === false && this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: '00',
                seconds: '03',
                color: 'purple',
                pomodoro: 0,
                break: true,
                interval: '',
            })

        } else if (this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === false && this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: '00',
                seconds: '03',
                color: 'green',
                break: true,
                interval: '',
            })

        } else if (this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === true) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: this.pad(0),
                seconds: this.pad(3),
                pomodoro: this.state.pomodoro + 1,
                color: 'red',
                break: false,
                interval: '',
            })
        }

    }


    timer = () => {
        this.checkPomodoro();
        if (this.state.seconds === '00') {
            this.setState({
                minutes: this.pad(this.state.minutes - 1),
                seconds: '59'
            })
        } else {
            this.setState({
                seconds: this.pad(this.state.seconds - 1)
            })
        }


    }

    start = () => {
        if (!this.state.interval) {
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
            minutes: '00',
            seconds: '03',
            interval: false,
            pomodoro: 0,
            break: false,
            interval: '',
        })
    }



    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.color }]}>
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
                            Reset
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
        width: 70,
        alignSelf: 'stretch',
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
    },
    timer: {
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        width: 200,
        fontSize: 40,
    }
});