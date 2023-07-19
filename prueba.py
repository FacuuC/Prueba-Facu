def calcular_segundos (segundos):
    horas = segundos//3600
    minutos = segundos//60%60
    segundos = segundos%60
    return (horas, minutos, segundos)

cantidad_segundos = int(input("ingresa los segundos: "))
g, h, i = calcular_segundos(cantidad_segundos)

if g < 24:
    print("Tiempo= {}:{}:{}".format(g, h, i))
else:
    d = g//24 
    g = g%24
    print("Tiempo= {}dias, {} horas, {} minutos y {} segundos".format(d, g, h, i))
