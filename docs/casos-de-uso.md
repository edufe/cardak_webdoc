# Casos de Uso

CardAK está diseñado para resolver problemas comunes en el manejo de archivos de intercambio de tarjetas.

## Tutoriales Paso a Paso

Esta sección presenta tutoriales detallados con ejemplos prácticos y capturas de pantalla.

### Identificar y obtener información de los archivos

A modo de ejemplo, veamos el contenido de un directorio con archivos para explicar cómo CardAK puede ayudarnos a identificar y analizar estos archivos.

![Listado de archivos en el directorio](/img/identificar-y-obtener-informacion-de-los-archivos-1.png)

Veamos ahora cómo utilizaría la herramienta para determinar esto. Cuando la invocamos sin parámetros, CardAK intenta identificar automáticamente todos los archivos en el directorio actual.

![Identificación automática con CardAK](/img/identificar-y-obtener-informacion-de-los-archivos-2.png)

A continuación, y a efectos de mostrar ejemplos concretos, vamos a trabajar con algunos archivos específicos.

![Selección de archivos específicos](/img/identificar-y-obtener-informacion-de-los-archivos-3.png)

Veamos de qué se tratan estos archivos:

![Identificación de archivos específicos](/img/identificar-y-obtener-informacion-de-los-archivos-4.png)

Esta vista es compacta, con los datos de cada archivo en una sola línea. Podemos obtener más detalles si lo necesitamos.

![Vista compacta de archivos](/img/identificar-y-obtener-informacion-de-los-archivos-5.png)

Si quisiéramos tener más información, podemos especificar el flag --analyze (-a) para obtener un análisis más detallado.

![Análisis detallado con --analyze](/img/identificar-y-obtener-informacion-de-los-archivos-6.png)

Para investigar un poco más, indicaremos como parámetro solamente el nombre del archivo que queremos analizar.

![Análisis de un archivo individual](/img/identificar-y-obtener-informacion-de-los-archivos-7.png)

Si además agregáramos el flag --verbose (-v), se nos mostraría la cantidad de registros de cada tipo.

![Información verbose de registros](/img/identificar-y-obtener-informacion-de-los-archivos-8.png)

### Validar los archivos en busca de errores

Veamos cómo funciona. Primero, validaremos los archivos cuyo nombre son file*.

![Validación de múltiples archivos](/img/validar-los-archivos-en-busca-de-errores-1.png)

Una salida alternativa es agregar el flag --silent (-z) para analizar la salida desde scripts de automatización.

![Modo silent para scripts](/img/validar-los-archivos-en-busca-de-errores-2.png)

Continuando con su utilidad para las automatizaciones, podemos especificar si queremos que el comando retorne un código de error específico.

![Códigos de retorno para automatización](/img/validar-los-archivos-en-busca-de-errores-3.png)

Volviendo a la validación, podemos obtener información más detallada de los errores encontrados.

![Detalles de errores encontrados](/img/validar-los-archivos-en-busca-de-errores-4.png)

### Corregir errores automáticamente

Habíamos visto previamente que el archivo file10 contenía dos errores y que era posible corregirlos automáticamente con el comando FIX.

![Corrección automática de errores](/img/corregir-errores-automaticamente-1.png)

### Cambiar el formato de los archivos

Por ejemplo, veamos el formato del archivo file14:

![Identificación del formato del archivo](/img/cambiar-el-formato-de-los-archivos-1.png)

Es un archivo codificado en EBCDIC, y no está en bloques de 1014. Supongamos que queremos convertirlo a ASCII con bloques de 1014 bytes.

![Conversión de formato](/img/cambiar-el-formato-de-los-archivos-2.png)

### Búsqueda de datos en archivos IPM

Primero, intentemos utilizar el comando grep del sistema:

![Intento con grep del sistema](/img/busqueda-de-datos-en-archivos-ipm-1.png)

Podemos, por supuesto, abrir el archivo con un editor hexadecimal y realizar ahí la búsqueda.

![Editor hexadecimal](/img/busqueda-de-datos-en-archivos-ipm-2.png)

Intentemos utilizar otra herramienta, en este caso una herramienta gráfica.

![Herramienta gráfica de búsqueda](/img/busqueda-de-datos-en-archivos-ipm-3.png)

Por el momento busquemos el texto "carpinteria". Observemos que la búsqueda no es case-sensitive.

![Búsqueda de texto específico](/img/busqueda-de-datos-en-archivos-ipm-4.png)

Veamos la salida de este comando:

![Resultados de búsqueda con CardAK](/img/busqueda-de-datos-en-archivos-ipm-5.png)

Podemos entonces, buscar ese registro específico de la siguiente forma:

![Búsqueda de registro específico](/img/busqueda-de-datos-en-archivos-ipm-6.png)

Vamos a ver el contenido del registro encontrado con el comando GREP utilizado anteriormente.

![Contenido del registro encontrado](/img/busqueda-de-datos-en-archivos-ipm-7.png)

Si queremos ver los valores de cada campo, agregaremos el flag --detailed (-d)

![Vista detallada de campos](/img/busqueda-de-datos-en-archivos-ipm-8.png)

Podemos agregar la opción --subfields (-s) para ver el contenido de cada uno de los subcampos.

![Vista de subcampos](/img/busqueda-de-datos-en-archivos-ipm-9.png)

---

## Casos de Uso Rápidos

Esta sección presenta casos de uso concisos para referencia rápida.

## Caso 1: Conversión de Archivos Mainframe

**Escenario**: Recibir un archivo IPM desde un mainframe en formato EBCDIC y convertirlo a ASCII para procesamiento en sistemas modernos.

**Solución**:

```bash
# Identificar el formato del archivo
cardak identify archivo_mainframe.ipm

# Convertir de EBCDIC a ASCII
cardak convert --from ebcdic --to ascii archivo_mainframe.ipm archivo_ascii.ipm

# Validar el archivo convertido
cardak validate archivo_ascii.ipm
```

## Caso 2: Análisis de Transacciones Específicas

**Escenario**: Buscar todas las transacciones de un BIN específico en un archivo de intercambio.

**Solución**:

```bash
# Buscar transacciones con un BIN específico
cardak grep --field PDS0023 --value "123456" archivo.ipm

# Exportar resultados a CSV para análisis
cardak filter --bin 123456 --export csv archivo.ipm resultados.csv

# Ver transacciones en modo interactivo
cardak open archivo.ipm
# Luego usar la función de búsqueda en TUI
```

## Caso 3: Validación de Archivos Antes de Envío

**Escenario**: Validar que un archivo de intercambio cumpla con todas las especificaciones antes de enviarlo al procesador.

**Solución**:

```bash
# Validación completa del archivo
cardak validate archivo.ipm

# Descripción detallada para verificar totales
cardak describe archivo.ipm

# Verificar que no hay duplicados
cardak duplicates --check archivo.ipm
```

## Caso 4: División de Archivos Grandes

**Escenario**: Dividir un archivo de intercambio grande en múltiples archivos más pequeños para procesamiento paralelo.

**Solución**:

```bash
# Dividir por número de registros
cardak split --records 1000 archivo_grande.ipm

# Dividir por tamaño de archivo
cardak split --size 10MB archivo_grande.ipm

# Dividir por fecha
cardak split --by-date archivo_grande.ipm
```

## Caso 5: Combinación de Archivos de Múltiples Fuentes

**Escenario**: Combinar archivos de intercambio de diferentes fuentes en un solo archivo consolidado.

**Solución**:

```bash
# Unir múltiples archivos
cardak join archivo1.ipm archivo2.ipm archivo3.ipm --output consolidado.ipm

# Verificar el archivo combinado
cardak describe consolidado.ipm

# Eliminar duplicados si es necesario
cardak duplicates --remove consolidado.ipm --output limpio.ipm
```

## Caso 6: Extracción de Datos para Reportes

**Escenario**: Extraer información específica de un archivo de intercambio para generar reportes.

**Solución**:

```bash
# Exportar a JSON con campos específicos
cardak export --format json --fields "PDS0023,DE004,DE049" archivo.ipm reporte.json

# Exportar a CSV para Excel
cardak export --format csv archivo.ipm reporte.csv

# Exportar solo registros de un tipo específico
cardak filter --record-type "0240" --export csv archivo.ipm transacciones.csv
```

## Caso 7: Identificación de Archivos Desconocidos

**Escenario**: Recibir un archivo de intercambio sin información sobre su formato y necesitar identificarlo.

**Solución**:

```bash
# Identificar automáticamente el formato
cardak identify archivo_desconocido.dat

# Mostrar información detallada
cardak describe archivo_desconocido.dat

# Convertir al formato deseado una vez identificado
cardak convert --from auto --to ascii-block1014 archivo_desconocido.dat archivo_convertido.ipm
```

## Caso 8: Reparación de Archivos Corruptos

**Escenario**: Recibir un archivo con problemas estructurales que necesita ser reparado.

**Solución**:

```bash
# Intentar validar y mostrar errores
cardak validate archivo_corrupto.ipm

# Intentar reparar el archivo
cardak fix archivo_corrupto.ipm --output archivo_reparado.ipm

# Validar el archivo reparado
cardak validate archivo_reparado.ipm
```

## Caso 9: Búsqueda de Patrones Específicos

**Escenario**: Buscar transacciones que cumplan con múltiples criterios específicos.

**Solución**:

```bash
# Filtrar por múltiples condiciones
cardak filter --bin 123456 --amount-gt 10000 --country US archivo.ipm

# Buscar con expresiones regulares
cardak grep --field DE002 --regex "^4.*" archivo.ipm

# Exportar resultados
cardak filter --bin 123456 --export json archivo.ipm resultados.json
```

## Caso 10: Exploración Interactiva

**Escenario**: Explorar visualmente el contenido de un archivo de intercambio sin conocer su estructura exacta.

**Solución**:

```bash
# Abrir en modo interactivo
cardak open archivo.ipm

# Dentro del TUI:
# - Navegar con flechas o j/k
# - Buscar con '/'
# - Filtrar con 'f'
# - Ver detalles con Enter
# - Exportar selección con 'e'
```

## Caso 11: Automatización de Procesos

**Escenario**: Crear scripts automatizados para procesamiento batch de archivos de intercambio.

**Solución**:

```bash
#!/bin/bash
# Script de procesamiento automatizado

for archivo in *.ipm; do
  echo "Procesando $archivo..."

  # Validar
  if cardak validate "$archivo"; then
    # Convertir
    cardak convert --from ebcdic --to ascii "$archivo" "ascii_$archivo"

    # Exportar
    cardak export --format csv "ascii_$archivo" "${archivo%.ipm}.csv"

    echo "✓ $archivo procesado correctamente"
  else
    echo "✗ Error en $archivo"
  fi
done
```

## Caso 12: Detección de Duplicados

**Escenario**: Identificar y eliminar transacciones duplicadas en un archivo de intercambio.

**Solución**:

```bash
# Detectar duplicados
cardak duplicates --check archivo.ipm

# Generar reporte de duplicados
cardak duplicates --report duplicados.txt archivo.ipm

# Eliminar duplicados
cardak duplicates --remove archivo.ipm --output limpio.ipm

# Verificar resultado
cardak describe limpio.ipm
```