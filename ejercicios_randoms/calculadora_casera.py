#Funciones de la calculadora

def Sumar(ent1, ent2):
    resul = ent1 + ent2
    return resul

def Restar (ent1, ent2):
    resul = ent1 + ent2
    return resul

def Dividir (ent1, ent2):
    resul = ent1 / ent2
    return resul

def Multiplicar (ent1, ent2):
    resul = ent1 * ent2
    return resul

print("¡¡¡Estas usando la calculadora de Facu!!!")
ent1 = int(input("ingrese el primer numero para la operacion: "))
ent2 = int(input("ingrese el segundo numero para la operacion: "))

lista = ["Sumar", "Restar", "Dividir", "Multiplicar"]
k = 0
i = 0
while k < len(lista):
    print(i, " ", lista[k])
    k = k+1
    i = i+1
    

    
entrada = int(input("ingresar el numero correspondiente a la funcion a querer realizar: "))

if entrada == 0:
    resultado = Sumar(ent1, ent2)
    print("la suma de las entradas resulta en: ",resultado)
elif entrada == 1:
    resultado = Restar(ent1, ent2)
    print("la resta de las entradas resulta en: ", resultado)
elif entrada == 2:
    resultado = Dividir(ent1, ent2)
    print("la division de las entradas resulta en: ", resultado)
elif entrada == 3:
    resultado = Multiplicar(ent1, ent2)
    print("la Multiplicacion de las entradas resulta en: ", resultado)



