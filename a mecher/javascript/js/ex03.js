var nome, n1, n2, soma
nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=prompt(nome+" digite um outro valor: ")
soma=n1+parseFloat(n2)
alert(nome+" a soma é: "+soma)
document.write("<h2>"+soma+"</h2>")
document.write("<h1>"+nome+"</h1>")