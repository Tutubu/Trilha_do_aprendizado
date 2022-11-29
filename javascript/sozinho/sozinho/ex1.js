var nome, n, r
nome=prompt("Qual o seu nome?")
n=parseFloat(prompt(nome+" digite um valor: "))
r=n%2
if(r==0)
{
    alert(nome+" o número "+n+" é par")
}
else
{
    alert(nome+" o número "+n+" é impar")
}