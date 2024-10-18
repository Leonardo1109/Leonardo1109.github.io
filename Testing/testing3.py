# pip install selenium --break-system-packages
import time 
import argparse
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
#from selenium.webdriver.chrome.service import Service
#from selenium.webdriver.chrome.options import Options -> navegador a usar
from selenium.webdriver.common.by import By

parser = argparse.ArgumentParser(description="Realizar un busqueda de google")

parser.add_argument('tema', metavar="T", type=str, nargs='?', default='Mexico', 
                    help='El tema a buscar el google')

args = parser.parse_args()

driver_path = '/home/leonardo/Descargas/geckodriver' #selenuim usara el navegador

navegador_path = "/usr/bin/firefox" #navegador a usar

#servicio para acceder 
service = Service(executable_path=driver_path)

navegador_options = Options()
navegador_options.binary_location = navegador_path

#driver 
driver = webdriver.Firefox(service=service, options=navegador_options) #tenemos que escoger el navegador a usar, en nuestro caso usaremos firefox
#driver = webdriver.Chrome(service=service, options=navegador_options)

#abrir el navegador e ir a google
driver.get('https://www.google.com/')

#caja de busqueda 
caja_busqueda = driver.find_element(By.NAME, 'q')

#pasar un tema a buscar (argumento tema)
caja_busqueda.send_keys(args.tema)
time.sleep(5)#detener 5 segundos 

caja_busqueda.submit()
time.sleep(5)#detener 5 segundos 