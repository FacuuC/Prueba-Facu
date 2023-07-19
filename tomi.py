
tiempo = int(input("pasame la cantidad de segundos: "))

horas = 0
minutos = tiempo//60
segundos = int(tiempo%60)

while tiempo >= 60:
    horas = horas + 1
    tiempo = tiempo - 60



print(f'los segundos ingresados son: {horas} horas, {minutos}minutos y {segundos}segundos')
    