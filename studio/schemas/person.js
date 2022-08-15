export default {
	name: 'person',
	title: 'Person',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: "Person's Name",
			type: 'string',
		},
		{
			title: "Person's Social Graph",
			name: 'links',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Link Title',
							type: 'string',
						},
						{
							name: 'url',
							title: 'Link URL',
							type: 'url',
						},
					],
				},
			],
		},
		{
			title: 'Headshot',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
		},
		{
			title: 'Biography',
			name: 'biography',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Headline 2', value: 'h2' },
					],
				},
			],
		},
	],
}
