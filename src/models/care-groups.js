import React from 'react';
import { List, Edit, Create, Datagrid, EditButton, TextField, LongTextField, ImageField, ImageInput, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'admin-on-rest';

export const CareGroupList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <TextField source="ShortName" label="Short Name" />
            <ImageField source="MainPhotoFullPath" label="Photo" title="Photo" />
            <TextField source="Description" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CareGroupEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="Name" />
            <LongTextInput source="ShortName" />
            <ImageField source="MainPhotoFullPath" label="Current Photo" title="title" />
            <ImageInput source="ImageFile" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <LongTextInput source="Description" />
        </SimpleForm>
    </Edit>
);

export const CareGroupCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Name" />
            <LongTextInput source="ShortName" />
            <ImageInput source="ImageFile" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <LongTextInput source="Description" />
        </SimpleForm>
    </Create>
);