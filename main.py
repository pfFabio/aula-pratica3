from random import randint

cont = 0
alvo = randint(0,100)

chute = ""

while chute != alvo:
    chute = int(input("digite um numero:  "))
    cont += 1

    chute > alvo and print("alto pra carai")
    chute < alvo and print("baixo pra carai")

print(f"acertou o numero era {alvo} vc tentou {cont}")
