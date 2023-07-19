""" year = int(input("please type the year that you want to find out: "))

def is_leap (year):
    if year % 4 == 0:
        return True
    elif year % 100 != 0 and year % 400 == 0:
        return True
    else:
        return False
        
resultado = is_leap(year)
if resultado == True:
    print(f'{year} is a leap year')
else: 
    print(f'{year} is not a leap year') """
    
#Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
# pregunte al usuario por la contraseña e imprima por pantalla si la contraseña 
# introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.

""" contraseña = input("Ingrese su contraseña: ")
comprobacion = input("por favor ingrese de nuevo su contrasña: ")

print("comprobando si su contraseña es la correcta")
if contraseña == comprobacion:
    print("Su contraseña es la correcta")
else:
    print("Su contraseña es incorrecta") """
    
""" numero = int(input("ingrese un numero cualquiera: "))
if numero % 2==0:
    print("par")
else: 
    print("inpar") """
    
#El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto.
#FORMA INCORRECTA DE SOLUCIONAR ESTE PROBLEMA
""" abc = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
nombre = input("ingrese su nombre: ")
sexo = input("ingrese su sexo (M o F): ")

if sexo == "F" and nombre[0] == abc[0, 12]:
    print("pertenece al grupo A")
elif sexo == "M" and nombre[0] == abc[13,26]:
    print("pertenece al grupo A")
else:
    print("pertenece al grupo B") """

#FORMA CORRECTA DE RESOLVERLO
    
""" nombre = input("ingrese su nombre: ")
sexo = input("ingrese su sexo (M o F): ")

if sexo == "F":
    if nombre.lower() < "m":
        group = "A"
    else:
        group = "B"
        
if sexo == "M":
    if nombre.lower() > "n":
        group = "A"
    else:
        group = "B"

print("Tu grupo es: ", group) """
    
    
renta_anual = int(input("¿Cual es tu renta anual? "))

if renta_anual < 10000:
    tipo_impositivo = "5%"
elif renta_anual >= 10000 and renta_anual < 20000:
    tipo_impositivo = "15%"
elif renta_anual >= 20000 and renta_anual < 35000:
    tipo_impositivo = "20%"
elif renta_anual >= 35000 and renta_anual < 60000:
    tipo_impositivo = "30%"
elif renta_anual >= 60000:
    tipo_impositivo = "45%"
    
print("tu tipo impositivo es: ", tipo_impositivo)
    