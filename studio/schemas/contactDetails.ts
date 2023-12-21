// footerSchema.js
export default {
    name: 'contactDetails',
    title: 'Contact Details',
    type: 'document',
    fields: [
        {
            name: 'businessAddress',
            title: 'Forretningsadresse',
            type: 'string'
        },
        {
            name: 'postalAddress',
            title: 'Postadresse',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Telefon',
            type: 'string'
        },
        {
            name: 'fax',
            title: 'Faks',
            type: 'number'
        },
        {
            name: 'email',
            title: 'E-post',
            type: 'string'
        },
        {
            name: 'orgNumber',
            title: 'Organisasjonsnummer',
            type: 'string'
        },
        {
            name: 'customers',
            title: 'Kunder',
            type: 'array',
            of: [{ type: 'kunde' }]
        },
        {
            name: 'openingHours',
            title: 'Åpningstider',
            type: 'string'
        },
        {
            name: 'socialMedia',
            title: 'Sosiale Medier',
            type: 'array',
            of: [{ type: 'socialMediaLink' }]
        },
        // Andre felt kan legges til etter behov
    ]
};
