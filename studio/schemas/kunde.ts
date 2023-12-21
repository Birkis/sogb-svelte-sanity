export default {
    name: 'kunde',
    title: 'Kunde',
    type: 'document',
    fields: [
        {
            name: 'kundeNavn',
            title: 'Kunde Navn',
            type: 'string'
        },
        {
            name: 'kundeLogo',
            title: 'Kunde Logo',
            type: 'image'
        },
        {
            name: 'kundeLink',
            title: 'Kunde Link',
            type: 'url'
        }
    ]

}