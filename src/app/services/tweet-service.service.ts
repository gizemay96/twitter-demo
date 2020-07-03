import { Injectable } from '@angular/core';
import { Tweet } from '../types/tweet.type';

@Injectable({
  providedIn: 'root',
})
export class TweetServiceService {
  tweets: Tweet[] = [
    {
      id: 1,
      title: 'twit1',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam mattis felis quis elit hendrerit mollis. Morbi eu turpis in turpis ornare sodales. Suspendisse leo enim, gravida at tellus nec, porttitor consequat purus. ',
      likes: 200,
      retweets: 400,
    },
    {
      id: 2,
      title: 'twit2',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam mattis felis quis elit hendrerit mollis. Morbi eu turpis in turpis ornare sodales. Suspendisse leo enim, gravida at tellus nec, porttitor consequat purus. ',
      likes: 300,
      retweets: 500,
    },
    {
      id: 3,
      title: 'twit3',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam mattis felis quis elit hendrerit mollis. Morbi eu turpis in turpis ornare sodales. Suspendisse leo enim, gravida at tellus nec, porttitor consequat purus. ',
      likes: 10,
      retweets: 20,
    },
  ];

  constructor() {}

  submitTweet(tweet: Tweet): void {
    const newTweet: Tweet = {
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
