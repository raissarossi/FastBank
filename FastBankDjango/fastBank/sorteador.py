import random

def numeros(qtd):
    num = ''
    for x in range(qtd):
        num += str(random.randint(0, 9))
        print(num)
    
    return num


def saldo():
    num = random.randint(1500, 100000)
    return num

