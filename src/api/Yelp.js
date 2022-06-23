import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer nSK6yz6Z5zRQNxab-qx-jwsXwWsS-QnB-YQb1Uxs2pIVi7s_5S-IUaf-1kEJfUNTMrZmqM0TajhesNG51D7K4Hwj0hxC4sy6iMQIBCPqs1JnNovbh6TKGfwi27C0YnYx',
  },
});
