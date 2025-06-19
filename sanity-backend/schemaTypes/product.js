export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Pure Paat', value: 'purepaat' },
          { title: 'Pure Toss', value: 'puretoss' },
          {  title: 'Handmade Mixed Paat', value: 'handmademixedpaat'},
           {title: 'Pure Cotton', value: 'purecotton'},
           { title: 'Cotton Silk', value: 'cottonsilk'},
           { title: 'Demaji Padmini', value: 'demajipadmini'},
           { title: 'Nooni Cotton', value: 'noonicotton'},
           { title: 'Kesapaat Cotton', value: 'kesapaatcotton'},
           { title: 'Assam Silk Saree', value: 'assamsilksaree'},
           { title: 'Assam Silk Replica Saree', value: 'assamsilkreplicasaree'},
           { title: 'Cotton Assameese Saree', value: 'cottonassameesesaree'},
           { title: 'Others', value: 'others'},
        ],
      },
    },
  ]
}