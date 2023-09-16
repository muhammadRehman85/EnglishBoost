import { View, Text, Pressable,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import styles from '../../../Styles/JokeStyle'
import axios from 'axios';
const Jokes = () => {
  const [joke, setJoke] = useState('');
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "How do you organize a space party? You 'planet'!",
    "I'm on a seafood diet. I see food and I eat it.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a fake noodle? An 'impasta'!",
    "How does a penguin build its house? Igloos it together!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "I couldn't figure out how to put my seatbelt on. Then it just 'clicked'!",
    "What's brown and sticky? A stick!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to be a baker, but I couldn't make enough dough.",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why can't you give Elsa a balloon? Because she will let it go!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What do you call a cow with two legs? Lean beef!",
    "I don't trust stairs because they're always up to something.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",   
      "Why don't scientists trust atoms? Because they make up everything!",
      "Did you hear about the claustrophobic astronaut? He just needed a little space.",
      "Why did the bicycle fall over? Because it was two-tired!",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "What did one wall say to the other wall? I'll meet you at the corner!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call a bear with no teeth? A gummy bear!",
      "How do you organize a space party? You 'planet'!",
      "I'm on a seafood diet. I see food and I eat it.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "Why did the math book look sad? Because it had too many problems.",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "What do you call a fake noodle? An 'impasta'!",
      "How does a penguin build its house? Igloos it together!",
      "What's orange and sounds like a parrot? A carrot!",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      "I used to play piano by ear, but now I use my hands.",
      "I couldn't figure out how to put my seatbelt on. Then it just 'clicked'!",
      "What's brown and sticky? A stick!",
      "Why don't skeletons fight each other? They don't have the guts.",
      "I used to be a baker, but I couldn't make enough dough.",
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "Why can't you give Elsa a balloon? Because she will let it go!",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "Why don't eggs tell jokes? Because they might crack up!",
      "What do you call a cow with two legs? Lean beef!",
      "I don't trust stairs because they're always up to something.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why don't oysters donate to charity? Because they are shellfish!",
      "What's the best time to go to the dentist? Tooth-hurty!",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      "How do you make a tissue dance? You put a little boogie in it!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call a bear with no teeth? A gummy bear!",
      "How do you make holy water? You boil the hell out of it!",
      "Why did the coffee file a police report? It got mugged!",
      "I only know 25 letters of the alphabet. I don't know y.",
      "What did one plate say to another plate? Lunch is on me!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "I used to be a baker, but I couldn't make enough dough.",
      "What's orange and sounds like a parrot? A carrot!",
      "Why don't skeletons fight each other? They don't have the guts.",
      "I'm friends with all electricians. We have great current connections!",
      "What do you call a fish wearing a crown? King fish!",
      "Why don't seagulls fly over the bay? Because then they'd be bagels!",
      "I'm writing a book on reverse psychology. Please don't read it!",
      "Why don't scientists trust stairs? Because they're always up to something.",
      "Did you hear about the kidnapping at the playground? They woke up!",
      "I got a job at a bakery because I kneaded dough!",
      "What's the difference between ignorance and apathy? I don't know, and I don't care.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call a bear with no teeth? A gummy bear!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "I used to play piano by ear, but now I use my hands.",
      "Why can't you give Elsa a balloon? Because she will let it go!",
      "I don't trust stairs because they're always up to something.",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      "What's brown and sticky? A stick!",
      "Why did the math book look sad? Because it had too many problems.",
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "Why don't eggs tell jokes? Because they might crack up!",
      "What do you call a cow with two legs? Lean beef!",
      "Why don't skeletons fight each other? They don't have the guts.",
      "What's orange and sounds like a parrot? A carrot!",
      "What's a vampire's favorite fruit? A blood orange!",
      "What do you get when you cross a snowman and a vampire? Frostbite!",
      "How do you organize a space party? You 'planet'!",
      "I'm on a seafood diet. I see food and I eat it.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "Why was the math book sad? Because it had too many problems!",
      "I used to be a baker, but I couldn't make enough dough.",
      "What's brown and sticky? A stick!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "What did one wall say to the other wall? I'll meet you at the corner!",
      "What's orange and sounds like a parrot? A carrot!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "What do you call a bear with no teeth? A gummy bear!",
      "How do you make holy water? You boil the hell out of it!",
      "Why did the coffee file a police report? It got mugged!",]; 

const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  setJoke(jokes[randomIndex]);
};

  useEffect(() => {
    getRandomJoke();
  }, []);
  return (
    <View style={styles.Wrapper}>
      <Image style={styles.image}source={require('../../../assets/Jokes/joke.jpg')}/>
        <View style={styles.JokeBox}>
      <Text style={styles.text}>
        😍 {joke}.🤣 
      </Text>
      </View>
      <Pressable style={styles.btn} onPress={getRandomJoke} >
        <Text style={styles.btnText} >Next</Text>
      </Pressable>
      
    </View>
  )
}

export default Jokes;
