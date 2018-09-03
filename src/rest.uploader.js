/**
 * Convert a `File` object returned by the upload input into
 * a base 64 string. That's easier to use on FakeRest, used on
 * the ng-admin example. But that's probably not the most optimized
 * way to do in a production database.
 */
const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 * @TODO: Can't handle multiple file fields. Decipher the code and figure out how to modify multiple fields.
 */
const addUploadCapabilities = requestHandler => (type, resource, params) => {
    console.log(`${type} ${resource} Uploading: `, params);
    if (type === 'UPDATE' || type === 'CREATE') {

        let chain = Promise.resolve();
        const newData = {...params.data};

        for (const field in params.data) {
            if (field.substr(field.length - 4).includes('File')) {
                const files = params.data[field];
                chain = chain.then(_ => new Promise(res => {
                    const fileObj = files[0];
                    console.log(`Converting file ${fileObj.title}...`);
                    convertFileToBase64(fileObj)
                        .then((result) => {
                            const newFileObj = {
                                ...fileObj,
                                src: result,
                                title: fileObj.title
                            };
                            console.log(`Modified ${field} src to ${result.substr(0, 100)}`);
                            newData[field] = [newFileObj];
                            res();
                        });
                    }
                ));
            }
        }
        return chain.then(() => {
                console.log(newData);
                return requestHandler(type, resource, {
                    ...params,
                    data: newData
                });
            });
    }

    return requestHandler(type, resource, params);
};
/* Preserving original code
// only freshly dropped pictures are instance of File
// const formerPictures = files.filter(p => !(p.rawFile instanceof File));
// const newPictures = files.filter(p => p.rawFile instanceof File);

// return Promise.all(newPictures.map(convertFileToBase64))
//     .then(base64Pictures => base64Pictures.map((picture64, i) => ({
//         src: picture64,
//         title: files[0].title
//     })))
//     .then(transformedNewPictures => requestHandler(type, resource, {
//         ...params,
//         data: {
//             ...params.data,
//             [field]: [...transformedNewPictures, ...formerPictures],
//         },
//     }));
*/

export default addUploadCapabilities;