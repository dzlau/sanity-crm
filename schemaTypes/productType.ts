import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({ name: 'productName', type: 'string', title: 'Product Name' }),
        defineField({ name: 'description', type: 'string', title: 'Description' }),
        defineField({ name: 'price', type: 'number', description: 'Price' }),
        defineField({ name: 'image', type: 'image', description: 'Image' }),
    ]
})