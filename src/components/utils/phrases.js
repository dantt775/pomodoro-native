export const workPhrases = [
    'The elevator to success is out of order. You’ll have to use the stairs, one step at a time.',
    'Think like a proton. Always positive.',
    'People say nothing is impossible, but I do nothing every day.',
    'Life is hard, like javascript',
    'Life is like a sewer… what you get out of it depends on what you put into it.',
    'Damn, looks like we have a  bug here...tap start, we gotta fix that!',
    'Work work work!',

]

export const breakPhrases = [
    'Try to pause each day and take a walk to view nature.',
    'When’s the last time you disconnected and took a vacation?',
    'Rest will make you do things better.',
    'Just go play some games',
    'Hey! you fixed that bug!',
    'Eat vegetables! With bacon of course!',
    'Its break time baby!'

]

export let randomPhrase = (type) => {
    if (type === 'break') {
        return breakPhrases[Math.floor(Math.random() * breakPhrases.length)];
    } else {
        return workPhrases[Math.floor(Math.random() * workPhrases.length)]
    }
}