import ReactGA from 'react-ga4';

const trackingId = 'G-CMW2KF0TC8'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};