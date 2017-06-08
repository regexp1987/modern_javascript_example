const list = {
	createDom : function(){
		let element = `
			<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="panel panel-default">
					  <div class="panel-body" id="list-container">
					    <ul>
					    	<li>Elemento 1</li>
					    	<li>Elemento 2</li>
					    	<li>Elemento 3</li>
					    	<li>Elemento 4</li>
					    	<li>Elemento 5</li>
					    	<li>Elemento 6</li>
					    	<li>Elemento 7</li>
					    	<li>Elemento 8</li>
					    	<li>Elemento 9</li>
					    	<li>Elemento 10</li>
					    </ul>
					    <a href="#" id="change-button" class="btn btn-primary">Update list</a>
					  </div>
					</div>
				</div>
			</div>
			</div>
			`
		document.write(element)
	},
	changeDom : function(){
		let elements = document.getElementById("list-container").querySelectorAll("li")
		Array.prototype.forEach.call(elements, function (item) {
		  item.innerHTML = item.innerHTML + " modificato"
		})
	}
}

export default list