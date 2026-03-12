// https://developers.google.com/maps/documentation/places/web-service/supported_types#table1
const placeTypes = [
    'restaurant'
];

const msDelayForApiCalls = 10;

// https://geojson.org/geojson-spec.html#positions
// GeoJSON describes an order for coordinates:
// [longitude, latitude, elevation]
const geoCoordinates = ({ latitude, longitude }) => {
    // some features not converting strings to floats, so it needs to be done here as well
    return [parseFloat(longitude), parseFloat(latitude)];
};

const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

module.exports = {
    placeTypes,
    msDelayForApiCalls,
    geoCoordinates,
    baseUrl,
};
