function convertermoeda()
{
	var Mx=document.forms["ficha"]["Moedax"].value;
	var My=document.forms["ficha"]["Moeday"].value;
	var Q=document.forms["ficha"]["Quantia"].value;

	if(Q=='')
{
	alert("Voce precisa informar a quantia da moeda!");
	return false;
}
if(Mx==My)
{
alert("Atenção!As moedas são identicas!");
 return false;

}
   if(Mx=="Real" && My=="Dolar")
   resultado=Q/1.76;
   else if(Mx=="Real" && My=="Euro")
   resultado=Q/2.26;
   else if(Mx=="Dolar" && My=="Real")
   resultado=Q*1.76;
   else if(Mx=="Euro" && My=="Real")
   resultado=Q*2.26;
   else if(Mx=="Dolar" && My=="Euro")
   resultado=Q*1.30;
   else if(Mx=="Euro" && My=="Dolar")
   resultado=Q/1.30;
   else if(Mx=="Real" && My=="Dinar Libia")
   resultado=Q/0.17;
   else if(Mx=="Dinar Libia" && My=="Real")
   resultado=Q*0.17;
   else if(Mx=="Euro" && My=="Dinar Libia")
   resultado=Q/0.66;
   else if(Mx=="Dinar Libia" && My=="Euro")
   resultado=Q*0.66;
   else if(Mx=="Dolar" && My=="Dinar Libia")
   resultado=Q/0.29;
   else if(Mx=="Dinar Libia" && My=="Dolar")
   resultado=Q*0.29;
   else if(Mx=="Real" && My=="Dolar Australiano")
   resultado=Q/0.86;
   else if(Mx=="Dolar Australiano" && My=="Real")
   resultado=Q*0.86;
   else if(Mx=="Euro" && My=="Dolar Australiano")
   resultado=Q*0.82;
   else if(Mx=="Dolar Australiano" && My=="Euro")
   resultado=Q/0.82;
   else if(Mx=="Dolar" && My=="Dolar Australiano")
   resultado=Q/0.08;
   else if(Mx=="Dolar Australiano" && My=="Dolar")
   resultado=Q*0.08;
   else if(Mx=="Real" && My=="Dolar Brunei")
   resultado=Q*0.38;
   else if(Mx=="Dolar Brunei" && My=="Real")
   resultado=Q/0.38;
   else if(Mx=="Euro" && My=="Dolar Brunei")
   resultado=Q*0.40;
   else if(Mx=="Dolar Brunei" && My=="Euro")
   resultado=Q/0.40;
   else if(Mx=="Dolar" && My=="Dolar Brunei")
   resultado=Q*0.20;
   else if(Mx=="Dolar Brunei" && My=="Dolar")
   resultado=Q/0.20;
   else if(Mx=="Real" && My=="Iene")
   resultado=Q*0.98;
   else if(Mx=="Iene" && My=="Real")
   resultado=Q/0.98;
   else if(Mx=="Euro" && My=="Iene")
   resultado=Q*0.99;
   else if(Mx=="Iene" && My=="Euro")
   resultado=Q/0.99;
   else if(Mx=="Dolar" && My=="Iene")
   resultado=Q*0.99;
   else if(Mx=="Iene" && My=="Dolar")
   resultado=Q/0.99;
   else if(Mx=="Iene"&& My=="Dolar Brunei")
   resultado=Q*0.98;
   else if(Mx=="Iene"&& My=="Dolar Australiano")
   resultado=Q*0.99;
   else if(Mx=="Dolar Brunei"&& My=="Iene")
   resultado=Q/0.98;
   else if(Mx=="Dolar Australiano"&& My=="Iene")
   resultado=Q/0.99;
   else if(Mx=="Dolar Brunei"&& My=="Dolar Australiano")
   resultado=Q/0.26;
   else if(Mx=="Dolar Australiano"&& My=="Dolar Brunei")
   resultado=Q*0.26;
   else if(Mx=="Dinar Libia"&& My=="Dolar Australiano")
   resultado=Q/0.15;
   else if(Mx=="Dinar Libia"&& My=="Dolar Brunei")
   resultado=Q*0.01;
   else if(Mx=="Dinar Libia"&& My=="Iene")
   resultado=Q/64.64;
    else if(Mx=="Dolar Australiano"&& My=="Dinar Libia")
   resultado=Q*0.15;
   else if(Mx=="Dolar Brunei"&& My=="Dinar Libia")
   resultado=Q/0.01;
   else if(Mx=="Iene"&& My=="Dinar Libia")
   resultado=Q*64.64;
   else if(Mx=="Real"&& My=="Bath Tailandia")
   resultado=Q*17.94;
   else if(Mx=="Dolar"&& My=="Bath Tailandia")
   resultado=Q*30.02;
   else if(Mx=="Euro"&& My=="Bath Tailandia")
   resultado=Q*40.75;
   else if(Mx=="Dinar Libia"&& My=="Bath Tailandia")
   resultado=Q*24.89;
   else if(Mx=="Dolar Australiano"&& My=="Bath Tailandia")
   resultado=Q*33.07;
   else if(Mx=="Dolar Brunei"&& My=="Bath Tailandia")
   resultado=Q*24.59;
    else if(Mx=="Iene"&& My=="Bath Tailandia")
   resultado=Q/0.40;
   else if(Mx=="Bath Tailandia"&& My=="Real")
   resultado=Q/17.94;
   else if(Mx=="Bath Tailandia"&& My=="Dolar")
   resultado=Q/30.02;
   else if(Mx=="Bath Tailandia"&& My=="Euro")
   resultado=Q/40.75;
   else if(Mx=="Bath Tailandia"&& My=="Dinar Libia")
   resultado=Q/24.89;
   else if(Mx=="Bath Tailandia"&& My=="Dolar Australiano")
   resultado=Q/33.07;
   else if(Mx=="Bath Tailandia"&& My=="Dolar Brunei")
   resultado=Q/24.59;
    else if(Mx=="Bath Tailandia"&& My=="Iene")
   resultado=Q*0.40;
   else if(Mx=="Real"&& My=="Coroa Tcheca")
   resultado=Q*11.04;
   else if(Mx=="Dolar"&& My=="Coroa Tcheca")
   resultado=Q*18.95;
   else if(Mx=="Euro"&& My=="Coroa Tcheca")
   resultado=Q*25.06;
   else if(Mx=="Dinar Libia"&& My=="Coroa Tcheca")
   resultado=Q*15.31;
   else if(Mx=="Dolar Australiano"&& My=="Coroa Tcheca")
   resultado=Q*20.34;
   else if(Mx=="Dolar Brunei"&& My=="Coroa Tcheca")
   resultado=Q*15.12;
   else if(Mx=="Iene"&& My=="Coroa Tcheca")
   resultado=Q/0.24;
    else if(Mx=="Bath/Tailandia"&& My=="Coroa Tcheca")
   resultado=Q/0.62;
   else if(Mx=="Coroa Tcheca"&& My=="Real")
   resultado=Q/11.04;
   else if(Mx=="Coroa Tcheca"&& My=="Dolar")
   resultado=Q/18.95;
   else if(Mx=="Coroa Tcheca"&& My=="Euro")
   resultado=Q/25.06;
   else if(Mx=="Coroa Tcheca"&& My=="Dinar Libia")
   resultado=Q/15.31;
   else if(Mx=="Coroa Tcheca"&& My=="Dolar Australiano")
   resultado=Q/20.34;
   else if(Mx=="Coroa Tcheca"&& My=="Dolar Brunei")
   resultado=Q/15.12;
   else if(Mx=="Coroa Tcheca"&& My=="Iene")
   resultado=Q*0.24;
    else if(Mx=="Coroa Tcheca"&& My=="Bath Tailandia")
   resultado=Q*0.62;
   else if(Mx=="Real"&& My=="Cedi Gana")
   resultado=Q*1.00;
   else if(Mx=="Dolar"&& My=="Cedi Gana")
   resultado=Q*1.76;
   else if(Mx=="Euro"&& My=="Cedi Gana")
   resultado=Q*2.26;
   else if(Mx=="Dinar Libia"&& My=="Cedi Gana")
   resultado=Q*0.17;
   else if(Mx=="Dolar Australiano"&& My=="Cedi Gana")
   resultado=Q*0.86;
   else if(Mx=="Dolar Brunei"&& My=="Cedi Gana")
   resultado=Q/0.38;
   else if(Mx=="Iene"&& My=="Cedi Gana")
   resultado=Q/0.98;
    else if(Mx=="Bath Tailandia"&& My=="Cedi Gana")
   resultado=Q/17.94;
   else if(Mx=="Coroa Tcheca"&& My=="Cedi Gana")
   resultado=Q/11.04;
   else if(Mx=="Cedi Gana"&& My=="Real")
   resultado=Q/1.00;
   else if(Mx=="Cedi Gana"&& My=="Dolar")
   resultado=Q/1.76;
   else if(Mx=="Cedi Gana"&& My=="Euro")
   resultado=Q/2.26;
   else if(Mx=="Cedi Gana"&& My=="Dinar Libia")
   resultado=Q/0.17;
   else if(Mx=="Cedi Gana"&& My=="Dolar Australiano")
   resultado=Q/0.86;
   else if(Mx=="Cedi Gana"&& My=="Dolar Brunei")
   resultado=Q*0.38;
   else if(Mx=="Cedi Gana"&& My=="Iene")
   resultado=Q*0.98;
    else if(Mx=="Cedi Gana"&& My=="Bath Tailandia")
   resultado=Q*17.94;
   else if(Mx=="Cedi Gana"&& My=="Coroa Tcheca")
   resultado=Q*11.04;
   else if(Mx=="Real"&& My=="Kuna Croacia")
   resultado=Q*3.34;
   else if(Mx=="Dolar"&& My=="Kuna Croacia")
   resultado=Q*5.73;
   else if(Mx=="Euro"&& My=="Kuna Croacia")
   resultado=Q*7.58;
   else if(Mx=="Dinar Libia"&& My=="Kuna Croacia")
   resultado=Q*4.63;
   else if(Mx=="Dolar Australiano"&& My=="Kuna Croacia")
   resultado=Q*6.15;
   else if(Mx=="Dolar Brunei"&& My=="Kuna Croacia")
   resultado=Q/4.58;
   else if(Mx=="Iene"&& My=="Kuna Croacia")
   resultado=Q/0.07;
    else if(Mx=="Bath Tailandia"&& My=="Kuna Croacia")
   resultado=Q/0.19;
   else if(Mx=="Coroa Tcheca"&& My=="Kuna Croacia")
   resultado=Q/0.30;
   else if(Mx=="Cedi Gana"&& My=="Kuna Croacia")
   resultado=Q*3.34;
   else if(Mx=="Kuna Croacia"&& My=="Real")
   resultado=Q/3.34;
   else if(Mx=="Kuna Croacia"&& My=="Dolar")
   resultado=Q/5.73;
   else if(Mx=="Kuna Croacia"&& My=="Euro")
   resultado=Q/7.58;
   else if(Mx=="Kuna Croacia"&& My=="Dinar Libia")
   resultado=Q/4.63;
   else if(Mx=="Kuna Croacia"&& My=="Dolar Australiano")
   resultado=Q/6.15;
   else if(Mx=="Kuna Croacia"&& My=="Dolar Brunei")
   resultado=Q*4.58;
   else if(Mx=="Kuna Croacia"&& my=="Iene")
   resultado=Q*0.07;
    else if(Mx=="Kuna Croacia"&& My=="Bath Tailandia")
   resultado=Q*0.19;
   else if(Mx=="Kuna Croacia"&& My=="Coroa Tcheca")
   resultado=Q*0.30;
   else if(Mx=="Kuna Croacia"&& My=="Cedi Gana")
   resultado=Q/3.34;
   else if(Mx=="Real"&& My=="Franco suiço")
   resultado=Q/0.47;
   else if(Mx=="Dolar"&& My=="Franco suiço")
   resultado=Q/0.09;
   else if(Mx=="Euro"&& My=="Franco suiço")
   resultado=Q*1.21;
   else if(Mx=="Dinar Libia"&& My=="Franco suiço")
   resultado=Q/0.26;
   else if(Mx=="Dolar Australiano"&& My=="Franco suiço")
   resultado=Q/0.02;
   else if(Mx=="Dolar Brunei"&& My=="Franco suiço")
   resultado=Q/0.27;
   else if(Mx=="Iene"&& My=="Franco suiço")
   resultado=Q/0.07;
    else if(Mx=="Bath/Tailandia"&& My=="Franco suiço")
   resultado=Q/0.97;
   else if(Mx=="Coroa Tcheca"&& My=="Franco suiço")
   resultado=Q/0.95;
   else if(Mx=="Cedi Gana"&& My=="Franco suiço")
   resultado=Q/0.47;
   else if(Mx=="Kuna Cracia"&& My=="Franco suiço")
   resultado=Q/0.84;
   else if(Mx=="Franco suiço"&& My=="Real")
   resultado=Q*0.47;
   else if(Mx=="Franco suiço"&& My=="Dolar")
   resultado=Q*0.09;
   else if(Mx=="Franco suiço"&& My=="Euro")
   resultado=Q/1.21;
   else if(Mx=="Franco suiço"&& My=="Dinar Libia")
   resultado=Q*0.26;
   else if(Mx=="Franco suiço"&& My=="Dolar Australiano")
   resultado=Q*0.02;
   else if(Mx=="Franco suiço"&& My=="Dolar Brunei")
   resultado=Q*0.27;
   else if(Mx=="Franco suiço"&& My=="Iene")
   resultado=Q*0.07;
   else if(Mx=="Franco suiço"&& My=="Bath/Tailandia")
   resultado=Q*0.97;
   else if(Mx=="Franco suiço"&& My=="Coroa Tcheca")
   resultado=Q*0.95;
   else if(Mx=="Franco suiço"&& My=="Cedi Gana")
   resultado=Q*0.47;
   else if(Mx=="Franco suiço"&& My=="Kuna Cracia")
   resultado=Q*0.84;
   else if(Mx=="Real"&& My=="Gourde Haiti")
   resultado=Q*23.06;
   else if(Mx=="Dolar"&& My=="Gourde Haiti")
   resultado=Q*39.60;
   else if(Mx=="Euro"&& My=="Gourde Haiti")
   resultado=Q*52.37;
   else if(Mx=="Dinar Libia"&& My=="Gourde Haiti")
   resultado=Q/33.18;
   else if(Mx=="Dolar Australiano"&& My=="Gourde Haiti")
   resultado=Q*42.50;
   else if(Mx=="Dolar Brunei"&& My=="Gourde Haiti")
   resultado=Q*32.78;
   else if(Mx=="Iene"&& My=="Gourde Haiti")
   resultado=Q/0.53;
    else if(Mx=="Bath Tailandia"&& My=="Gourde Haiti")
   resultado=Q*1.33;
   else if(Mx=="Coroa Tcheca"&& My=="Gourde Haiti")
   resultado=Q*2.17;
   else if(Mx=="Cedi Gana"&& My=="Gourde Haiti")
   resultado=Q*23.06;
   else if(Mx=="Kuna Cracia"&& My=="Gourde Haiti")
   resultado=Q*7.17;
   else if(Mx=="Franco suiço"&& My=="Gourde Haiti")
   resultado=Q*44.97;
   else if(Mx=="Gourde Haiti"&& My=="Real")
   resultado=Q/23.06;
   else if(Mx=="Gourde Haiti"&& My=="Dolar")
   resultado=Q/39.60;
   else if(Mx=="Gourde Haiti"&& My=="Euro")
   resultado=Q/52.37;
   else if(Mx=="Gourde Haiti"&& My=="Dinar Libia")
   resultado=Q*33.18;
   else if(Mx=="Gourde Haiti"&& My=="Dolar Australiano")
   resultado=Q/42.50;
   else if(Mx=="Gourde Haiti"&& My=="Dolar Brunei")
   resultado=Q/32.78;
   else if(Mx=="Gourde Haiti"&& My=="Iene")
   resultado=Q*0.53;
    else if(Mx=="Gourde Haiti"&& My=="Bath Tailandia")
   resultado=Q/1.33;
   else if(Mx=="Gourde Haiti"&& My=="Coroa Tcheca")
   resultado=Q/2.17;
   else if(Mx=="Gourde Haiti"&& My=="Cedi Gana")
   resultado=Q/23.06;
   else if(Mx=="Gourde Haiti"&& My=="Kuna Cracia")
   resultado=Q/7.17;
   else if(Mx=="Gourde Haiti"&& My=="Franco suiço")
   resultado=Q/44.97;
   else if(Mx=="Real"&& My=="Guilder Antilhas")
   resultado=Q*1.04;
   else if(Mx=="Dolar"&& My=="Guilder Antilhas")
   resultado=Q*1.79;
   else if(Mx=="Euro"&& My=="Guilder Antilhas")
   resultado=Q*2.37;
   else if(Mx=="Dinar Libia"&& My=="Guilder Antilhas")
   resultado=Q/1.45;
   else if(Mx=="Dolar Australiano"&& My=="Guilder Antilhas")
   resultado=Q*1.92;
   else if(Mx=="Dolar Brunei"&& My=="Guilder Antilhas")
   resultado=Q*1.43;
   else if(Mx=="Iene"&& My=="Guilder Antilhas")
   resultado=Q*0.98;
    else if(Mx=="Bath Tailandia"&& My=="Guilder Antilhas")
   resultado=Q*0.96;
   else if(Mx=="Coroa Tcheca"&& My=="Guilder Antilhas")
   resultado=Q*0.91;
   else if(Mx=="Cedi Gana"&& My=="Guilder Antilhas")
   resultado=Q*1.04;
   else if(Mx=="Kuna Cracia"&& My=="Guilder Antilhas")
   resultado=Q*0.69;
   else if(Mx=="Franco suiço"&& My=="Guilder Antilhas")
   resultado=Q*1.96;
   else if(Mx=="Gourde Haiti"&& My=="Guilder Antilhas")
   resultado=Q/0.95;
   else if(Mx=="Guilder Antilhas"&& My=="Real")
   resultado=Q/1.04;
   else if(Mx=="Guilder Antilhas"&& My=="Dolar")
   resultado=Q/1.79;
   else if(Mx=="Guilder Antilhas"&& My=="Euro")
   resultado=Q/2.37;
   else if(Mx=="Guilder Antilhas"&& My=="Dinar Libia")
   resultado=Q*1.45;
   else if(Mx=="Guilder Antilhas"&& My=="Dolar Australiano")
   resultado=Q/1.92;
   else if(Mx=="Guilder Antilhas"&& My=="Dolar Brunei")
   resultado=Q/1.43;
   else if(Mx=="Guilder Antilhas"&& My=="Iene")
   resultado=Q/0.98; 
    else if(Mx=="Guilder Antilhas"&& My=="Bath Tailandia")
   resultado=Q/0.96;
   else if(Mx=="Guilder Antilhas"&& My=="Coroa Tcheca")
   resultado=Q/0.91;
   else if(Mx=="Guilder Antilhas"&& My=="Cedi Gana")
   resultado=Q/1.04;
   else if(Mx=="Guilder Antilhas"&& My=="Kuna Cracia")
   resultado=Q/0.69;
   else if(Mx=="Guilder Antilhas"&& My=="Franco suiço")
   resultado=Q/1.96;
   else if(Mx=="Guilder Antilhas"&& My=="Gourde Haiti")
   resultado=Q*0.95;
   else if(Mx=="Real"&& My=="Rupia Nepal")
   resultado=Q*45.85;
   else if(Mx=="Dolar"&& My=="Rupia Nepal")
   resultado=Q*78.70;
   else if(Mx=="Euro"&& My=="Rupia Nepal")
   resultado=Q*104.09;
   else if(Mx=="Dinar Libia"&& My=="Rupia Nepal")
   resultado=Q/65.03;
   else if(Mx=="Dolar Australiano"&& My=="Rupia Nepal")
   resultado=Q*84.47;
   else if(Mx=="Dolar Brunei"&& My=="Rupia Nepal")
   resultado=Q*62.78;
   else if(Mx=="Iene"&& My=="Rupia Nepal")
   resultado=Q*0.01;
    else if(Mx=="Bath Tailandia"&& My=="Rupia Nepal")
   resultado=Q*2.56;
   else if(Mx=="Coroa Tcheca"&& My=="Rupia Nepal")
   resultado=Q*4.15;
   else if(Mx=="Cedi Gana"&& My=="Rupia Nepal")
   resultado=Q*45.85;
   else if(Mx=="Kuna Cracia"&& My=="Rupia Nepal")
   resultado=Q*13.73;
   else if(Mx=="Franco suiço"&& My=="Rupia Nepal")
   resultado=Q*82.12;
   else if(Mx=="Gourde Haiti"&& My=="Rupia Nepal")
   resultado=Q*0.99;
   else if(Mx=="Guilder Antilhas"&& My=="Rupia Nepal")
   resultado=Q*43.98;
   else if(Mx=="Rupia Nepal"&& My=="Real")
   resultado=Q/45.85;
   else if(Mx=="Rupia Nepal"&& My=="Dolar")
   resultado=Q/78.70;
   else if(Mx=="Rupia Nepal"&& My=="Euro")
   resultado=Q/104.09;
   else if(Mx=="Rupia Nepal"&& My=="Dinar Libia")
   resultado=Q*65.03;
   else if(Mx=="Rupia Nepal"&& My=="Dolar Australiano")
   resultado=Q/84.47;
   else if(Mx=="Rupia Nepal"&& My=="Dolar Brunei")
   resultado=Q/62.78;
   else if(Mx=="Rupia Nepal"&& My=="Iene")
   resultado=Q/0.01;
    else if(Mx=="Rupia Nepal"&& My=="Bath Tailandia")
   resultado=Q/2.56;
   else if(Mx=="Rupia Nepal"&& My=="Coroa Tcheca")
   resultado=Q/4.15;
   else if(Mx=="Rupia Nepal"&& My=="Cedi Gana")
   resultado=Q/45.85;
   else if(Mx=="Rupia Nepal"&& My=="Kuna Cracia")
   resultado=Q/13.73;
   else if(Mx=="Rupia Nepal"&& My=="Franco suiço")
   resultado=Q/82.12;
   else if(Mx=="Rupia Nepal"&& My=="Gourde Haiti")
   resultado=Q/0.99;
   else if(Mx=="Rupia Nepal"&& My=="Guilder Antilhas")
   resultado=Q/43.98;
   else if(Mx=="Real"&& My=="Rial Catar")
   resultado=Q*2.12;
   else if(Mx=="Dolar"&& My=="Rial Catar")
   resultado=Q*3.64;
   else if(Mx=="Euro"&& My=="Rial Catar")
   resultado=Q*4.82;
   else if(Mx=="Dinar Libia"&& My=="Rial Catar")
   resultado=Q/2.94;
   else if(Mx=="Dolar Australiano"&& My=="Rial Catar")
   resultado=Q*3.91;
   else if(Mx=="Dolar Brunei"&& My=="Rial Catar")
   resultado=Q*2.90;
   else if(Mx=="Iene"&& My=="Rial Catar")
   resultado=Q/0.95;
    else if(Mx=="Bath Tailandia"&& My=="Rial Catar")
   resultado=Q/0.88;
   else if(Mx=="Coroa Tcheca"&& My=="Rial Catar")
   resultado=Q/0.81;
   else if(Mx=="Cedi Gana"&& My=="Rial Catar")
   resultado=Q*2.12;
   else if(Mx=="Kuna Cracia"&& My=="Rial Catar")
   resultado=Q/0.36;
   else if(Mx=="Franco suiço"&& My=="Rial Catar")
   resultado=Q*3.98;
   else if(Mx=="Gourde Haiti"&& My=="Rial Catar")
   resultado=Q/0.91;
   else if(Mx=="Guilder Antilhas"&& My=="Rial Catar")
   resultado=Q*2.03;
   else if(Mx=="Rupia Nepal"&& My=="Rial Catar")
   resultado=Q/0.95;
   else if(Mx=="Rial Catar"&& My=="Real")
   resultado=Q/2.12;
   else if(Mx=="Rial Catar"&& My=="Dolar")
   resultado=Q/3.64;
   else if(Mx=="Rial Catar"&& My=="Euro")
   resultado=Q/4.82;
   else if(Mx=="Rial Catar"&& My=="Dinar Libia")
   resultado=Q*2.94;
   else if(Mx=="Rial Catar"&& My=="Dolar Australiano")
   resultado=Q/3.91;
   else if(Mx=="Rial Catar"&& My=="Dolar Brunei")
   resultado=Q/2.90;
   else if(Mx=="Rial Catar"&& My=="Iene")
   resultado=Q*0.95;
    else if(Mx=="Rial Catar"&& My=="Bath Tailandia")
   resultado=Q*0.88;
   else if(Mx=="Rial Catar"&& My=="Coroa Tcheca")
   resultado=Q*0.81;
   else if(Mx=="Rial Catar"&& My=="Cedi Gana")
   resultado=Q/2.12;
   else if(Mx=="Rial Catar"&& My=="Kuna Cracia")
   resultado=Q*0.36;
   else if(Mx=="Rial Catar"&& My=="Franco suiço")
   resultado=Q/3.98;
   else if(Mx=="Rial Catar"&& My=="Gourde Haiti")
   resultado=Q*0.91;
   else if(Mx=="Rial Catar"&& My=="Guilder Antilhas")
   resultado=Q/2.03;
   else if(Mx=="Rial Catar"&& My=="Rupia Nepal")
   resultado=Q*0.95;
  else
  resultado=Q/1.30;
  
 document.forms["ficha"]["resultado"].value=resultado;
 return true;
 
 }