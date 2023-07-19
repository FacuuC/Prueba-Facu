def ImparesHasta (entrada):
    impares = 0
    i = 1
    while i < int(entrada):
        if i % 2 != 0:
            impares = impares + 1
        i = i = 1
    return impares

entrada = int(input("ingrese el numero deseado: "))
resultado = ImparesHasta(entrada)
print (resultado)