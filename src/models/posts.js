import React from 'react';
import { List, Edit, Create, Datagrid, EditButton, TextField, SelectInput, DateInput, DateField, ImageField, ImageInput, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'admin-on-rest';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Title" />
            <TextField source="Content" />
            <ImageField source="ImageFullPath" label="Image" title="Title" />
            <DateField source="PostDate" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="Title" />
            <SelectInput source="Type" choices={[
                { id: 1, name: 'Announcement' }
             ]} />
            <LongTextInput source="Content" />
            <ImageField source="ImageFullPath" label="Current Image" title="title" />
            <ImageInput source="ImageFile" label="Upload New Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <DateInput source="PostDate" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Title" />
            <SelectInput source="Type" choices={[
                { id: 1, name: 'Announcement' }
             ]} />
            <LongTextInput source="Content" />
            <ImageInput source="ImageFile" label="Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <DateInput source="PostDate" />
        </SimpleForm>
    </Create>
);