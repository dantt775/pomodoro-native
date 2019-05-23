

import React, { Component } from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';

export default class Phrases extends Component {
    constructor(props) {

        super(props);

    }

    state = {
        type: 'work',
        interval: '',
        phrase: workPhrases[Math.floor(Math.random() * workPhrases.length)],
        fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0
    }


    componentWillUpdate() {

    }

    componentDidMount() {
        let myInterval = setInterval(this.randomPhrase, 10000)
        //setInterval(this.loopAnimatedStart, 2500)
        //setInterval(this.loopAnimatedEnd, 2500)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type !== this.state.type) {
            this.setState({ type: nextProps.phrase });
        }
    }


    loopAnimatedStart = () => {
        this.state.fadeAnim.setValue(0);
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                    // Animate to opacity: 1 (opaque)
                duration: 4500,              // Make it take a while
            }
        ).start(() => {
            Animated.timing(                  
                this.state.fadeAnim,            
                {
                    toValue: 0,                    
                    duration: 4500,              
                }
            ).start();
        });
    }

    randomPhrase = () => {
        this.loopAnimatedStart();
        console.log('randomPhrase chamado')
        if (this.state.type === 'break') {

            this.setState({
                phrase: breakPhrases[Math.floor(Math.random() * breakPhrases.length)]
            })

        } else {
            this.setState({
                phrase: workPhrases[Math.floor(Math.random() * workPhrases.length)]
            })
            


        }
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.Text style={{ ...styles.phrase, opacity: fadeAnim }}>{this.state.phrase}</Animated.Text>

        )
    }
}


const styles = StyleSheet.create({
    phrase: {
        width: 250,
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
})
const workPhrases = [
    'The elevator to success is out of order. You’ll have to use the stairs, one step at a time.',
    'Think like a proton. Always positive.',
    'People say nothing is impossible, but I do nothing every day.',
    'Life is hard, like javascript',
    'Life is like a sewer… what you get out of it depends on what you put into it.',
    'Damn, looks like we have a  bug here...we gotta fix that!',
    'Work work work!',

]

const breakPhrases = [
    'Try to pause each day and take a walk to view nature.',
    'When’s the last time you disconnected and took a vacation?',
    'Rest will make you do things better.',
    'Just go play some games',
    'Hey! you fixed that bug!',
    'Eat vegetables! With bacon of course!',
    'Its break time baby!'

]

