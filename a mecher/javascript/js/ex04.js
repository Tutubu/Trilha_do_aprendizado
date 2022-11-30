var nome, n1, n2, som, su, di, mu
nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=parseFloat(prompt(nome+" digite um outro valor: "))

so=n1+n2
su=n1-n2
mu=n1*n2
di=n1/n2
alert(nome+" a soma é: "+so)
alert(nome+" a subtração é: "+su)
alert(nome+" a multiplicação é: "+mu)
if(n2==0)
{
    alert(nome+" não existe divisão por 0 inbecil")
}
else
{
    alert(nome+" a divisão é: "+di)
}