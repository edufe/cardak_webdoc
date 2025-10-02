# OBFUSCATE

Permite modificar automáticamente datos sensibles en archivos de intercambio.

## Sintaxis

```bash
cardak obfuscate [OPCIONES] <archivos>...
```

```bash
$ cardak help obfuscate
usage: cardak obfuscate [<flags>] <files>...

Obfuscate files by replacing PAN values with random values, keeping the original BIN

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
  -6, --bin6                 Force BIN length to 6
  -8, --bin8                 Force BIN length to 8
  -b, --binlength=BINLENGTH  Keep these number of leading characters as the BIN. Value must be greater than 1
  -R, --records=RECORDS      List of record numbers to be Searched. Values are separated by comma (,) and ranges are indicated by the starting and ending
                             record separated by a hyphen (-)
  -l, --last                 Use the record numbers returned on the last GREP command

Args:
  <files>  File names to search and replace
```

## Descripción

Este comando (alias `rep`) se utiliza para proteger datos sensibles en archivos de intercambio modificando automaticamente el valor donde se almacena el PAN (Primary Account Number). El valor se reemplaza con valores generados al azar pero manteniendo el BIN (Bank Identification Number) original.

## Objetivo

Este comando es escencial por las siguientes razones:
- **Privacidad de datos**: Enmascara numeros reales de tarjetas para utilizar en entornos de prueba/desarrollo
- **Compliance**: Cunple con los requerimientos de PCI-DSS para manejar datos sensibles
- **Seguridad**: Crea copias de archivos de produccion que permiten ser usados en forma segura para pruebas o analisis de datos
- **Archivos para demostraciones**: Permite generar archivos seguros para hacer demostraciones

## Funcionamiento

### Funciones basicas

1. **Lee** Lee el contenido de archivos IPM (MasterCard Interchange Processing Messages)
2. **Identifica** valores de PAN en el campo DE002 (Primary Account Number)
3. **Mantiene** el BIN original (primeros caracteres del PAN que identifican al emisor)
4. **Reemplaza** los digitos siguientes con valores al azar
5. **Mantiene** los checksums correctos en los trailers del archivo
6. **Genera** un archivo nuevo con el sufijo  `_OBFUSCATED.ipm`

### Logica para preservar el BIN

El BIN (Bank Identification Number) se preserva para manetener:
- Card network identification (Visa, MasterCard, etc.)
- Informacion del banco emisor
- Caracteristicas de la tarjeta
- Enrutamiento y reglas de procesamiento

**Deteccion automatica del largo del BIN**:
- **16-digit PANs**: Preserves first 6 digits (standard BIN-6)
- **19-digit PANs**: Preserves first 8 digits (extended BIN-8)

**Note**: El comando obfuscate esta diseñado para operar en el campo DE002 (PAN).


### Contenido del archivo generado

El archivo ofuscado contiene:
- ✅ La misma estructura del archivo original
- ✅ La misma cantidad de registros
- ✅ Los mismos campos (solo el DE002 cambia)
- ✅ Mantiene los checksums del trailer correctos
- ✅ Se mantienen los valores de los BINes
- ✅ Se cambia el resto de los caracteres del PAN aleatorios

### Archivo de salida no creado

Si **no se realizan cambios** (no se encuentran valores de PAN), el archivo de salida es **borrado automaticamente** para evitar dejar archivos duplicados.

