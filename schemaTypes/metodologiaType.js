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
      name: 'metodologiaImagem2',
      title: 'Imagem 2',
      type: 'image',
    }),
    defineField({
      name: 'titulo1',
      title: 'Titulo 1',
      type: 'string'
    }),
    defineField({
      name: 'descricao1',
      title: 'Descrição 1',
      type: 'string'
    }),
    defineField({
      name: 'titulo2',
      title: 'Titulo 2',
      type: 'string'
    }),
    defineField({
      name: 'descricao2',
      title: 'Descrição 2',
      type: 'string'
    }),
    defineField({
      name: 'titulo3',
      title: 'Titulo 3',
      type: 'string'
    }),
    defineField({
      name: 'descricao3',
      title: 'Descrição 3',
      type: 'string'
    }),
  ],
})