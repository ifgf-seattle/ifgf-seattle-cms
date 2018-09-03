import React from 'react';
import { List, Edit, Create, Datagrid, EditButton, TextField, SelectInput, NumberInput, ImageField, ImageInput, DisabledInput, SimpleForm, TextInput } from 'admin-on-rest';

export const SeriesList = (props) => (
    <List title="Series" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <ImageField source="ImageFullPath" label="Image" title="Square Image" />
            <ImageField source="BannerImageFullPath" label="Banner" title="Banner Image" />
            <TextField source="StartMonthYear" label="Start Date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SeriesEdit = (props) => (
    <Edit title="Series" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="Name" />
            <SelectInput source="StartMonth" choices={[
                { id: 1, name: 'January' }, { id: 2, name: 'February' }, { id: 3, name: 'March' }, { id: 4, name: 'April' },
                { id: 5, name: 'May' }, { id: 6, name: 'June' }, { id: 7, name: 'July' }, { id: 8, name: 'August' }, 
                { id: 9, name: 'September' }, { id: 10, name: 'October' }, { id: 11, name: 'November' }, { id: 12, name: 'December' }, 
             ]} />
            <NumberInput source="Year" />
            <ImageField source="ImageFullPath" label="Current Image" title="title" />
            <ImageInput source="ImageFile" label="Upload Square Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <hr />
            <ImageField source="BannerImageFullPath" label="Current Image" title="title" />
            <ImageInput source="BannerImageFile" label="Upload Banner Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const SeriesCreate = (props) => (
    <Create title="Create New Series" {...props}>
        <SimpleForm>
            <TextInput source="Name" />
            <SelectInput source="StartMonth" label="Month" choices={[
                { id: 1, name: 'January' }, { id: 2, name: 'February' }, { id: 3, name: 'March' }, { id: 4, name: 'April' },
                { id: 5, name: 'May' }, { id: 6, name: 'June' }, { id: 7, name: 'July' }, { id: 8, name: 'August' }, 
                { id: 9, name: 'September' }, { id: 10, name: 'October' }, { id: 11, name: 'November' }, { id: 12, name: 'December' }, 
            ]} />
            <NumberInput source="Year" />
            <ImageInput source="ImageFile" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="BannerImageFile" label="Upload New Banner" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);