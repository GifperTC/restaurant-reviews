import axios from "axios";

export default axios.create({
  baseURL: "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-tqbnt/service/restaurants/incoming_webhook/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});