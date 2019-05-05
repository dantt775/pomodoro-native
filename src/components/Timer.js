import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

import { workPhrases, breakPhrases } from './utils/phrases'




export default class Timer extends Component {

    state = {
        minutes: '05',
        seconds: '03',
        interval: '',
        pomodoro: 0,
        color: '#E98C8C',
        break: false,
        phrase: workPhrases[Math.floor(Math.random() * 2)]
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
                color: '#B076AB',
                pomodoro: 0,
                break: true,
                interval: '',
                phrase: breakPhrases[Math.floor(Math.random() * 6)]
            })

        } else if (this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === false && this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: '00',
                seconds: '03',
                color: '#95B275',
                break: true,
                interval: '',
                phrase: breakPhrases[Math.floor(Math.random() * 6)]
            })

        } else if (this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === true) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: this.pad(0),
                seconds: this.pad(3),
                pomodoro: this.state.pomodoro + 1,
                color: '#E98C8C',
                break: false,
                interval: '',
                phrase: workPhrases[Math.floor(Math.random() * 8)]
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

                <View style={styles.phraseContainer}>
                    <Text style={styles.phrase}> {this.state.phrase}</Text>
                </View>
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
    phraseContainer: {  
        height: 200,
        
    },
    phrase: {
        width: 300,
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
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