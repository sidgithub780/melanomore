import Yelp from '../api/Yelp';

const getInfo = async (theLocation) => {
  const response = await Yelp.get('/search', {
    params: {
      limit: 50,
      term: 'Hospital',
      location: theLocation,
    },
  });

  return response;
};

export { getInfo };
