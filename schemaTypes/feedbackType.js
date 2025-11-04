import { defineField, defineType } from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'depoimento',
      title: 'Depoimento 1',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Nome 1',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Descrição 1',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Foto da Pessoa 1',
      type: 'image',
    }),
    defineField({
      name: 'depoimento',
      title: 'Depoimento 2',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Nome 2',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Descrição 2',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Foto da Pessoa 2',
      type: 'image',
    }),
    defineField({
      name: 'depoimento',
      title: 'Depoimento 3',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Nome 3',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Descrição 3',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Foto da Pessoa 3',
      type: 'image',
    }),
  ],
})
