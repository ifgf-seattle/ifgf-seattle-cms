import React from 'react';
import { jsonServerRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';
// import { jsonServerRestClient } from '../node_modules/admin-on-rest/lib/rest';
import { authenticator } from './authenticator';
import addUploadCapabilities from './rest.uploader';

import { CareGroupList, CareGroupEdit, CareGroupCreate } from './models/care-groups';
import { PostList, PostEdit, PostCreate } from './models/posts';
import { SeriesList, SeriesEdit, SeriesCreate } from './models/sermon-series';
import { SermonList, SermonEdit, SermonCreate } from './models/sermons';
import { SettingList, SettingEdit, SettingCreate } from './models/site-settings';

require('dotenv').config();

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        const encodedAuth = btoa(process.env.REACT_APP_API_USER + ':' + process.env.REACT_APP_API_PW);
        options.headers = new Headers({
            Accept: 'application/json',
            Authorization: 'Basic ' + encodedAuth
        });
    }
    return fetchUtils.fetchJson(url, options);
}
let restClient = jsonServerRestClient('http://localhost:8000/v1', httpClient);
restClient = addUploadCapabilities(restClient);

const App = () => (
    <Admin title="IFGF Seattle Admin" authClient={authenticator} restClient={restClient}>
        <Resource name="care-groups" options={{ label: 'Care Groups' }} list={CareGroupList} edit={CareGroupEdit} create={CareGroupCreate} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="sermon-series" options={{ label: 'Series' }} list={SeriesList} edit={SeriesEdit} create={SeriesCreate} />
        <Resource name="sermons"  list={SermonList} edit={SermonEdit} create={SermonCreate} />
        <Resource name="site-settings" options={{ label: 'Site Settings' }} list={SettingList} edit={SettingEdit} />
    </Admin>
);

export default App;
