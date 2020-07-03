import { Injectable } from '@angular/core';
import { Tweet } from '../types/tweet.type';
import { tweet } from '../models/shared/tweetData.json';

@Injectable({
  providedIn: 'root',
})
export class TweetServiceService {

  tweets = tweet;
  constructor() {}

  submitTweet(tweet: Tweet): void {
    const newTweet = {
      id: Math.floor(Math.random() * 100)+4,
      ...tweet,
      likes: 0,
      retweets: 0,
    };

    this.tweets.unshift(newTweet);
    console.log(this.tweets)
  }

  like(id: number) {
    const likedTweet = this.tweets.find((tweet) => tweet.id === id)
    likedTweet.likes++
  }

  retweet(id: number) {
    const retweetedTweet = this.tweets.find((tweet) => tweet.id === id);
    retweetedTweet.retweets++;
  }
}
