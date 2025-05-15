function avalia(){
	let points=0;
		
	//controlando as tentativas
	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.attempt) {
		  sessionStorage.attempt = Number(sessionStorage.attempt)+1;
		} else {
		  sessionStorage.attempt = 1;
		}
		if (sessionStorage.attempt>3){
			alert("Voce esgostou suas tentativas...");
			return true;
		}
		else
			document.getElementById("result").innerHTML += "Tentativas " + sessionStorage.attempt;
	} 
	else {
		document.getElementById("result").innerHTML = "seu navegador nao suporta web storage...";
	}
		
	//recupera as questoes do documento 
	questions=document.querySelectorAll(".question");

	//para cada questao
	for (i=0; i<questions.length;i++){

		//obtem as respostas
		answers = questions[i].childNodes[1].childNodes;

		for (j=0;j<5;j++){
			console.log();
			if (answers[j].childNodes[0].checked==true)
				if (answers[j].childNodes[0].value=='1'){
					points++;
					answers[j].classList.add("correct");
				}
				else answers[j].classList.add("wrong");
		}
	}
	exibirQuestionario();
	document.getElementById("result").innerHTML += " = "+ points+" pontos<br>";
	
	//armazenando os pontos no sessionStorage
	let score = "score"+sessionStorage.attempt;
	sessionStorage.setItem(score,points);
		
}