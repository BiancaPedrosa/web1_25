function exibirQuestao(num){
	questoes=document.getElementsByClassName("question");
	for(i=0;i<5;i++){
		if (i==(num-1))
			questoes[i].setAttribute("style","display:block");
		else 
			questoes[i].setAttribute("style","display:none");
	}

}
function exibirQuestionario(){
	questoes=document.getElementsByClassName("question");
	for(i=0;i<5;i++)
			questoes[i].setAttribute("style","display:block");
}
function limparQuestionario(num){
	questoes=document.getElementsByClassName("question");
	for(i=0;i<5;i++)
		questoes[i].setAttribute("style","display:none");
}