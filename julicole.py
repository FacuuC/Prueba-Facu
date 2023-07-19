mes = ["enero", "febrero","marzo", "abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
mm_por_mes = []

def cargar_mm(mes,mm_por_mes):
    print("cargando los datos necesarios...")
    i = 0
    for i in (enumerate(mes)):
        print("ingresa los mm llovidos del mes:", i)
        valor = float(input())
        mm_por_mes.append(valor) 
    return(mm_por_mes)
    
def calculo_promedio(mm_por_mes):
    mm_anuales = 0
    for i in range(12):
        mm_anuales = mm_anuales + mm_por_mes[i]
        promedio = mm_anuales /12
        
    return(promedio)

print("procediendo a calcular el promedio anual de milimetros llovidos...")
resultado1 =  cargar_mm(mes, mm_por_mes)
resultado2 = calculo_promedio(resultado1)

print("el promedio de milimetros anuales llovidos es de: ", resultado2, "mm")

    
