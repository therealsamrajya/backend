import mongoose, { Schema } from "mongoose";

//doc is created everytime we subscribe(sub,channel)

//to count no of subscribers in the channel we count the specific channel in the docs

//to count how many channels we subscribed we select whcih channel we subscribed and select the channel

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //subcribing channel
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
