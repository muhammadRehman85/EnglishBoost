import { View, Text, Pressable,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import styles from '../../../Styles/JokeStyle'
import axios from 'axios';
const Quotes = () => {
  const [Quote, setQuote] = useState('');
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The best revenge is massive success. - Frank Sinatra",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The future depends on what you do today. - Mahatma Gandhi",
    "The best way to predict the future is to create it. - Peter Drucker",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only person you should try to be better than is the person you were yesterday. - Unknown",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "What we think, we become. - Buddha",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "We can complain because rose bushes have thorns, or rejoice because thorns have roses. - Alphonse Karr",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The best revenge is massive success. - Frank Sinatra",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The future depends on what you do today. - Mahatma Gandhi",
    "The best way to predict the future is to create it. - Peter Drucker",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only person you should try to be better than is the person you were yesterday. - Unknown",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "What we think, we become. - Buddha",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "We can complain because rose bushes have thorns, or rejoice because thorns have roses. - Alphonse Karr",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
    // ... Add more quotes
  ];
  
 
  

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  setQuote(quotes[randomIndex]);
};

  useEffect(() => {
    getRandomQuote();
  }, []);




  return (
    <View style={styles.Wrapper}>
      <Image style={styles.image}source={require('../../../assets/Quote/quote.png')}/>
        <View style={styles.JokeBox}>
      <Text style={styles.text}>
    💖 {Quote}💓 
      </Text>
      </View>
      <Pressable style={styles.btn} onPress={getRandomQuote} >
        <Text style={styles.btnText} >Next</Text>
      </Pressable>
   
    
    </View>
  )
}

export default Quotes;
