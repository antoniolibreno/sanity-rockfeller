import { defineField, defineType } from 'sanity'


export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'Depoimento',
      title: 'Depoimento',
      type: 'string',
    }),

    defineField({
      name: 'Nome Aluno',
      title: 'Aluno',
      type: 'string',
    }),
    
    defineField({
      name: 'Foto do Aluno',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})
