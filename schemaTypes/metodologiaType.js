import { defineField, defineType } from 'sanity'

export const metodologiaType = defineType({
  name: 'metodologia',
  title: 'Metodologia',
  type: 'document',
  fields: [
    defineField({
      name: 'metodologiaImagem1',
      title: 'Imagem 1',
      type: 'image',
    }),
    defineField({
      name: 'Textometodologia1',
      title: 'Texto da metodologia 1',
      type: 'string',
    }),
     defineField({
      name: 'Textometodologia2',
      title: 'Texto da metodologia 2',
      type: 'string',
    }),
  ],
})