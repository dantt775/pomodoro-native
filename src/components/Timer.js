import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Animated } from 'react-native';


import Phrases, { randomPhrase }  from './Phrases';
import Info from './Info';



export default class Timer extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        minutes: '25',
        seconds: '00',
        interval: '',
        pomodoro: 0,
        color: this.props.parentColor,
        break: false,
        phrase: 'work',
        modalVisible: false,
    }
    

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    pad = (d) => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }


    checkPomodoro = () => {
        if (this.state.pomodoro === 3 && this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === false && this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: '15',
                seconds: '01',
                color: this.props.parentColor('#B076AB'),
                pomodoro: 0,
                break: true,
                interval: '',
                phrase: 'break'
            })
                
        } else if (this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === false && this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: '05',
                seconds: '01',
                color: this.props.parentColor('#95B275'),
                break: true,
                interval: '',
                phrase: 'break'
            })
        } else if (this.state.minutes === '00' && this.state.seconds === '00' && this.state.break === true) {
            clearInterval(this.state.interval);
            this.setState({
                minutes: '25',
                seconds: '01',
                pomodoro: this.state.pomodoro + 1,
                color: this.props.parentColor('#E98C8C'),
                break: false,
                interval: '',
                phrase: 'work'
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
                interval: myInterval,
                phrase: 'work'
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
            interval: false,
            pomodoro: 0,
            break: false,
            interval: '',
            color: this.props.parentColor('#E98C8C'),
            phrase: 'work'
            
        })
        
        
    }



    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.color }]}>



                <View style={styles.phraseContainer}>
                    <Phrases phrase={this.state.phrase}/>
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
        height: 120,

    },
    phrase: {
        width: 250,
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
        fontSize: 25,
        textAlign: 'center',
        height: 50,
        width: 120,
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