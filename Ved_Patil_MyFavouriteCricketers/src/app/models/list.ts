import {Content} from './content'

export class List {
	private _contentArray: Content[];

	constructor()
	{
		// setup the array as an Empty initial..
		this._contentArray = [];
	}

	get content():Content[]{
		return this._contentArray;
	}

	addContent(Content:any)
	{
		this._contentArray.push(Content);
	}

	getLength()
	{
		return this._contentArray.length;
	}

	
	getInfo(index:number) {
		for(var i = 0; i < this.getLength(); i++) {
		    if(this._contentArray[i].id === index) {
			return `
			<div id="cardData" class="m-4">
				<img src="${this._contentArray[index].imageLink}" class="card-img-top" alt="...">
					<div class="card-body bg-dark text-light">
						<h1 class="mb-2 bg-dark text-light text-center">Name - ${this._contentArray[index].title}</h1>
						<h2 class="mb-2 bg-dark text-light text-center">Spouse - ${this._contentArray[index].author}</h2>
						<h3 class="mb-2 bg-dark text-light text-center">Type - ${this._contentArray[index].type}</h3>
						<p class="mb-2 bg-dark text-light text-center">About - ${this._contentArray[index].body}</p>
					</div>
			</div>`
		    }
		}
		return `<div class="text-center alert alert-info" role="alert">Not Found!</div>`;
	    }
}