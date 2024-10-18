import requests
import unittest

class TestGitApi(unittest.TestCase):
    def test_get_repositorio(self):

        # conectandose a mi repositorio de git
        url = "https://api.github.com/users/Leonardo1109/repos" #omarmendoza564
        responce = requests.get(url)

        #Verificar que la respuesta sea exitosa
        print(f"Codigo de respuesta: {responce.status_code}")
        self.assertEqual(responce.status_code, 200)

        # Ya que hay respuesta verificamos que existan repositorios
        print(responce.json())
        print(f"Numero de repositorios: {len(responce.json())}")
        self.assertTrue(len(responce.json()) > 0) # evalua que haya algo en json
        self.assertFalse(len(responce.json()) == 0) # evalua que no haya algo en json

        #Ver los repositorios
        repos = [repo['name'] for repo in responce.json()]
        print(repos)
        self.assertIn('Patito24', repos) # Verifica si algo particular se encuentre en un repositorio
        self.assertNotIn('crudEmpleados', repos) # Verifica si algo particular se encuentre en un repositorio

        print(f" La clase del codigo de despuesta es: {type(responce.status_code)}")
        self.assertIsInstance(responce.status_code, int)
        self.assertNotIsInstance(responce.status_code, str)

if __name__ == '__main__':
    unittest.main()

# en terminal en VisualStudio Code:
