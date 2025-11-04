import { defineField, defineType } from 'sanity'

export const cursosType = defineType({
  name: 'curso',
  title: 'Cursos',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome do Curso',
      type: 'string',
    }),
    defineField({
      name: 'nome',
      title: 'Descrição do Curso',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})
