/*basic flashcard application*/
var inquirer = require("inquirer"),
	fs = require('fs');

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

function ClozeCard(text,close){
	this.text = text;
	this.cloze = cloze;

}
/* setting up the promise */
ClozeCard.prototype.partial = function (){
	if(this.text.includes(this.cloze)){
		return this.text.replace(this.cloze, '....');
	}
	else{
		return"This does not work, oops";
	}
};
/* when the resolve is called */
	inquirer.prompt({
			type: 'list',
			name: 'card',
			message: ['BasicCard', 'Clozure']
	}).then(function(data){
		if(data.cards ==='BasicCard')}
	{	
			type: 'input',
			name: 'front',
			message: 'Who was the first President of the United States?, George Washington'

		},{
			type: 'input',
			name: 'back',
			message: 'George Washington'
		}	
	]};
}

else{
	return inquirer.prompt([
		{	
			type: 'input',
			name: 'text',
			message: 'George Wasington was the first president of the United State'

		},{
			type: 'input',
			name: 'cloze',
			message: '...was the first president of the United States'
		}	
	]};
}

}).then(function(data){

	if(data.front){
		var basicFirstPresident = new BasicCard(data.front, data.back);
		addCards({data: basicFirstPresident});

	}
	else{
		var clozeFirstPresident = new ClozeCard(data.text, data.cloze);
		addCards({data: clozeFirstPresident, partial: clozeFirstPresident.partial()});
  	}
	
	})
		.catch(function(err){
		console.log(err);	
	});

var addCards = function	(add){
	fs.readFile('./data.json', 'utf8', function(error, data){
		if(error) throw error;

		var arr = JSON.parse(data);

		arr.cards.push(add);

		fs.writeFile('./data.json', JSON.stringify(arr). 'utf8', function(err){
			if(err)throw err;
			console.log("Completion")
		})
	})
}
	