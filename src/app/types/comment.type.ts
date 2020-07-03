export type Comment = {
    tweetId:number;
    id?: number;
    title: string;
    text: string;
    likes?: number;
    retweets?: number;
  };