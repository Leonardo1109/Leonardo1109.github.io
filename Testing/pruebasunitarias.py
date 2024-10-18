# Leonardo Olvera Martinez
import unittest
from funciones import *

# assertTrue estoy esperando un true, si llega pase la prueba
# assertFalse estoy esperando un false, si llega pase la prueba

class TestFunciones(unittest.TestCase):
    # Prueba para verificar si un numero es primo
    def test_es_primo(self):
        print("Leonardo Olvera Martinez | Validar es primo")
        self.assertTrue(es_primo(5)) # el 5 es primo
        self.assertFalse(es_primo(4)) # el 4 no es primo

    # Segundo caso prueba. Prueba para validar si un numero es divisible entre otro
    def test_es_divisible(self):
        print("Leonardo Olvera Martinez | Validar es divisible")
        self.assertTrue(es_divisible(10,2)) # es divisible
        self.assertFalse(es_divisible(10,3)) # no es divisible

    def test_contiene_subcadena(self):
        print("Leonardo Olvera Martinez | Validar es subcadena")
        self.assertTrue(contiene_subcadena('Hola mundo', 'mundo'))
        self.assertFalse(contiene_subcadena('Hola mundo', 'patito24'))


# ejecutando las pruebas
if __name__ == '__main__':
    unittest.main()