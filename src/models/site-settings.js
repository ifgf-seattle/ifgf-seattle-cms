import React from 'react';
import { List, Edit, Create, Datagrid, EditButton, TextField,  DisabledInput, SimpleForm, TextInput } from 'admin-on-rest';

export const SettingList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="SettingName" label="Setting" />
            <TextField source="SettingValue" label="Value" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SettingEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextField source="SettingName" label="Setting" />
            <TextInput source="SettingValue" label="Value" />
        </SimpleForm>
    </Edit>
);

export const SettingCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="SettingName" label="Setting" />
            <TextInput source="SettingValue" label="Value" />
        </SimpleForm>
    </Create>
);