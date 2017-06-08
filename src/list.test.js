import list from './list.js'

test('A ul tag with id  #list-container should be created', () => {
	list.createDom()
	const ulElement = document.getElementById('list-container');
	expect(ulElement.tagName).toBeDefined();
	expect(ulElement.tagName).toEqual("DIV");
});


test('A dom list should be created', () => {
	list.createDom()
	const liElements = document.getElementById('list-container').querySelectorAll("li");
	expect(liElements).toHaveLength(10);
});


test('All li elements should contains "modificato"', () => {
	list.createDom()
	list.changeDom()
	const liElements = document.getElementById('list-container').querySelectorAll("li");
	Array.prototype.forEach.call(liElements, function (item) {	  
	  expect(item.innerHTML).toContain('modificato');
	})
});

