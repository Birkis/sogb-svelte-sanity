import {defineArrayMember, defineField, defineType} from 'sanity'


export const ContentPage = defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page Builder',
            of: [
                defineArrayMember({
                    name: 'hero',
                    type: 'hero'
                }),
                defineArrayMember({
                    name: 'textWithImage',
                    type: 'textWithImage'
                }),
                defineArrayMember({
                    name: 'gallery',
                    type: 'gallery'
                }),
                defineArrayMember({
                    name: 'form',
                    type: 'form'
                }),
                defineArrayMember({
                    name: 'video',
                    type: 'video'
                })
            ]
        })
    ]
})
