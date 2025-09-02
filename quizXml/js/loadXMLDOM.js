function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  loadQuiz(this);
	}
  }
  xhttp.open("GET", "xml/quiz.xml", true);
  xhttp.send();
}
function loadQuiz(xml) {
  var xmlDoc = xml.responseXML;
  var docX = xmlDoc.getElementsByTagName("question");
  var questionario = document.createElement('ol');
  questionario.setAttribute("id", "questionary");
  for(let i=0;i<docX.length;i++){
  	  let questao= document.createElement('li');
  	  questao.classList.add('question');
	  questao.setAttribute('id','question'+(i+1));
	  questao.setAttribute('style','display:none');
  	  questao.appendChild(document.createTextNode(docX[i].getElementsByTagName("text")[0].childNodes[0].nodeValue));
  	  let respostas = document.createElement("ol");
  	  respostas.classList.add("answer");
  	  let y = docX[i].getElementsByTagName("answer");
  	  for (let j=0; j<5; j++){
	  	let resposta = document.createElement('li');
	  	let z = document.createElement("INPUT");
		    z.setAttribute("type", "radio");
		    z.setAttribute("name", "answer"+docX[i].getAttribute('id'));
		    z.setAttribute("value",y[j].getAttribute('value'));
		let w = document.createTextNode(y[j].childNodes[0].nodeValue);
		resposta.appendChild(z);
		resposta.appendChild(w);
  	   respostas.appendChild(resposta); 
	  } 
	  questao.appendChild(respostas);
	  questionario.appendChild(questao);	
  }
 fQuest = document.getElementById("formQuestionary");
 fQuest.appendChild(questionario);
}
