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
  ],
})