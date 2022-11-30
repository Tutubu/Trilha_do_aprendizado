var nome, idade, cpf
nome=prompt("Qual o seu nome?")
idade=parseFloat(prompt(nome+" qual sua idade?"))
alert("Bem vindo "+nome+"! Você tem "+idade+" anos")
if(idade>=18)
{
    cpf=prompt(nome+" qual seu CPF?")
    alert(nome+" seu CPF e seu cu é: "+cpf)
}
else
{
    alert("Você é menor de idade")
}