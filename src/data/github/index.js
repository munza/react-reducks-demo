import axios from 'axios';
import queryString from 'query-string';

export default {

  getReposByTopic(topic) {
    return axios.get(
      'https://api.github.com/search/repositories?' + queryString.stringify({q: `topic:${topic}`})
    );
  },

};