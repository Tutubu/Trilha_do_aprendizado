var nome, n, t,s
nome=prompt("Qual o seu nome?")
n=parseFloat(prompt(nome+" digite um valor: "))
t=n%3
s=n%7
if(t==0 && s==0)
{
    alert(nome+" o número "+n+" é divisivel por 3 e por 7")
}
if(t==0 && s!=0)
{
    alert(nome+" o número "+n+" é divisivel apenas por 3")
}
if(t!=0 && s==0)
{
    alert(nome+" o número "+n+" é divisivel apenas por 7")
}
if(t!=0 && s!=0)
{
    alert(nome+" o número "+n+" não é divisivel por 3, nem por 7")
}