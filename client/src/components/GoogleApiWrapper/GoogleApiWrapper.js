
import {  GoogleApiWrapper } from 'google-maps-react';

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_NOT_SECRET_CODE
})