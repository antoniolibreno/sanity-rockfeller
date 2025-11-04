import { defineField, defineType } from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'depoimento',
      title: 'Depoimento',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Descrição',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Foto da Pessoa',
      type: 'image',
    }),
  ],
})
