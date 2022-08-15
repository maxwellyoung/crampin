export default {
	name: 'gallery',
	title: 'Gallery',
	type: 'object',
	fields: [
		{
			title: 'Images',
			name: 'images',
			type: 'array',
			of: [
				{
					title: 'Image',
					name: 'image',
					type: 'image',
					options: {
						hotspot: true, // <-- Defaults to false
					},
					fields: [
						{
							name: 'caption',
							type: 'string',
							title: 'Caption',
							options: {
								isHighlighted: true, // <-- make this field easily accessible
							},
						},
						{
							name: 'alt',
							title: 'Alt Text',
							type: 'string',
							options: {
								isHighlighted: true, // <-- make this field easily accessible
							},
						},
					],
				},
			],
		},
	],
	options: {
		layout: 'grid',
	},
}
