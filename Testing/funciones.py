# Función para verificar si un número es primo
def es_primo(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

# Función para verificar si un número es divisible entre otro
def es_divisible(a, b):
    return a % b == 0

# Función para verificar si una cadena está contenida en otra
def contiene_subcadena(cadena, subcadena):
    return subcadena in cadena
