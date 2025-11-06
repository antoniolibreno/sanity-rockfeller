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
      name: 'NomeAluno',
      title: 'Aluno',
      type: 'string',
    }),
    
    defineField({
      name: 'FotoAluno',
      title: 'Imagem',
      type: 'image',
    }),


    
  ],
})
