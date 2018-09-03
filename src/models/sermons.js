import React from 'react';
import { List, Edit, Create, Datagrid, EditButton, TextField, SelectInput, DateInput, DateField, ImageField, ImageInput, DisabledInput, LongTextInput, SimpleForm, TextInput, ReferenceInput, FileField, FileInput } from 'admin-on-rest';
import UrlField from '../custom-fields/UrlField';

export const SermonList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Title" />
            <TextField source="Speaker" />
            <TextField source="SeriesName" label="Series" />
            <UrlField source="MediaUrl" label="Media File" textSource="MediaPath" />
            <DateField source="Date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SermonEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="Title" />
            <TextInput source="Speaker" />
            <ReferenceInput label="Series" source="SeriesID" reference="sermon-series">
                <SelectInput optionText="NameWithMonthYear" optionValue="id" />
            </ReferenceInput>
            <ImageField source="ThumbnailFullPath" label="Current Image" title="title" />
            <ImageInput source="ThumbnailFile" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <FileInput source="MediaFile" label="Upload New Sermon File" accept="video/*, audio/*" placeholder={<p>Drop/select a sermon video or audio file to overwite current file.</p>}>
                <FileField source="src" title="title" />
            </FileInput>
            <UrlField source="MediaUrl" label="Current Sermon File" textSource="MediaPath" />
            <SelectInput source="Type" label="Media Type" choices={[
                { id: 1, name: 'Audio' },
                { id: 2, name: 'Video' }
             ]} />
            <DateInput source="Date" />
        </SimpleForm>
    </Edit>
);

export const SermonCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Title" />
            <TextInput source="Speaker" />
            <ReferenceInput label="Series" source="SeriesID" reference="sermon-series">
                <SelectInput optionText="NameWithMonthYear" />
            </ReferenceInput>
            <ImageInput source="ThumbnailFile" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <FileInput source="MediaFile" label="Upload New Sermon File" accept="video/*, audio/*" placeholder={<p>Drop/select a sermon video or audio file.</p>}>
                <FileField source="src" title="title" />
            </FileInput>
            <SelectInput source="Type" label="Media Type" choices={[
                { id: 1, name: 'Audio' },
                { id: 2, name: 'Video' }
             ]} />
            <DateInput source="Date" />
        </SimpleForm>
    </Create>
);