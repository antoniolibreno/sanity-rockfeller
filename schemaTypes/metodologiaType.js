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
      name: 'Titulo',
      title: 'Titulo 1',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição 1',
      type: 'string',
    }),
    defineField({
      name: 'Titulo',
      title: 'Titulo 2',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição 2',
      type: 'string',
    }),
    defineField({
      name: 'Titulo',
      title: 'Titulo 3',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição 3',
      type: 'string',
    }),
  ],
})
