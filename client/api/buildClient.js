import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    //This is how we create preconfigured version of axios
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    //we don't need to set header, the browser will handle that for us
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default buildClient;
