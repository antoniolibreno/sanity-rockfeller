import { defineField, defineType } from 'sanity'

export const metodologiaType = defineType({
  name: 'metodologia',
  title: 'Metedologia',
  type: 'document',
  fields: [
    defineField({
      name: 'metodologiaImagem1',
      title: 'Imagem 1',
      type: 'image',
    }),
    defineField({
      name: 'Textometodologia1',
      title: 'Texto da metodologia',
      type: 'String',
    }),
     defineField({
      name: 'Textometodologia2',
      title: 'Texto da metodologia',
      type: 'String',
    }),
  ],
})