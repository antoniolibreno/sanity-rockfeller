    import { defineField, defineType } from 'sanity'
    export const faq = defineType({
    name: 'faq',
    title: 'faq',
    type: 'document',
    fields: [
        defineField({
        name: 'pergunta1',
        title: 'Pergunta 1',
        type: 'string',
        }), 
        defineField({
        name: 'resposta1',
        title: 'resposta 1',
        type: 'string',
        }),


        defineField({
        name: 'pergunta2',
        title: 'Pergunta 2',
        type: 'String',
        }),
        
        defineField({
        name: 'resposta2',
        title: 'resposta 2',
        type: 'String',
        }),

        defineField({
        name: 'pergunta3',
        title: 'pergunta3',
        type: 'string',
        }),

        defineField({
        name: 'resposta3',
        title: 'resposta 3',
        type: 'string',
        })
    ],
    })
