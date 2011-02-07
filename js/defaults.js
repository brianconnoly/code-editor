// Set defaults
function set_defaults() {
	project = {
		name: 'Default project',
		files: [{
				name: 'script.js',
				src: [
					{
						type: 'jquery',
						selector: '#header',
						actions: [
							{
								type: 'click'
							}
						]
					},
					{
						type: 'jquery',
						selector: '#menu .element',
						actions: []
					},
				]
			},
			{
				name: 'script2.js'
			}
		],
		objects: [
			{
				selector: '#header',
				name: 'Заголовок'
			},
			{
				selector: '#menu',
				name: 'Главное меню'
			},
			{
				selector: '.element',
				name: 'Элемент'
			},
			{
				selector: '#menu .element',
				name: 'Элемент главного меню'
			}
		]
	};
	
	dict = [
		{
			value: 'click',
			name: 'Клик'
		},
		{
			value: 'animation',
			name: 'Анимация'
		}
	]
}
