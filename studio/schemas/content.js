export default {
	name: 'content',
	title: 'Entry',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200, // // will be ignored if slugify is set
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
				isUnique: (proposedSlug) => true,
			},
		},
		{
			title: 'Published Date',
			name: 'publishedDate',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
				calendarTodayLabel: 'today',
			},
		},

		{
			title: 'Author',
			name: 'author',
			type: 'reference',
			weak: false,
			to: [{ type: 'person' }],
			description: 'Who created this?',
		},
		{
			title: 'Featured Image',
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
					// Editing this field will be hidden behind an "Edit"-button
					name: 'Caption',
					type: 'string',
					title: 'Attribution',
				},
			],
		},
		{
			title: 'Body',
			name: 'body',
			type: 'array',
			of: [
				{
					type: 'block',
					of: [
						{
							type: 'reference',
							to: { type: 'person' },
						},
					],
				},
				{ type: 'gallery' },
				{ type: 'youtube' },
			],
		},
	],
}
