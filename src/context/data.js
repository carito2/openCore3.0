export const conections = ['Base SQL Server 1', 'Base SQL Server 2', 'Base SQL Server 3'];
export const tables = ['Plan de cuentas'];
export const tablesForm = ['Cliente'];
export const typeSelect = ['Consulta', 'Editable', 'Combobox'];
export const typeSelectForm = ['Alfabético', 'Numérico', 'Selección'];
export const selectPresentation = ['Viajes', 'Alimentación', 'Automotríz']
export const listFont = ['Alegreya SC', 'Poppins'];
export const listFontSize = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];
export const listFontWeight = ['Regular', 'Bold', 'Extra bold'];
export const typeConnections = ['BD'];
export const userValidations = {
    user: '1234',
    password: 'abcd'
}

export const chartOfAccounts = [
    {
        attributes: {
            color: '#000000',
            font: 'poppins',
            'font-size': '12',
            'font-weight': 'regular'
        }, 
        field: {
            value: 'Código',
            check: false
        },
        text: '',
        type: 'Editable'
    },
    {
        attributes: {
            color: '#000000',
            font: 'poppins',
            'font-size': '12',
            'font-weight': 'regular'
        },
        field: {
            value: 'Nombre',
            check: false
        },
        text: '',
        type: 'Editable'
    }
];

export const client = [
    {
        attributes: {
            color: '#000000',
            font: 'poppins',
            'font-size': '12',
            'font-weight': 'regular'
        }, 
        field: {
            value: 'Rut cliente',
            check: false
        },
        text: '',
        type: 'Numérico',
        large: 8,
        dec: 0,
        presentation: 'Ingrese Rut'
    },
    {
        attributes: {
            color: '#000000',
            font: 'poppins',
            'font-size': '12',
            'font-weight': 'regular'
        }, 
        field: {
            value: 'Nombre cliente',
            check: false
        },
        text: '',
        type: 'Alfabético',
        large: 20,
        dec: 0,
        presentation: 'Ingrese Nombre'
    },
    {
        attributes: {
            color: '#000000',
            font: 'poppins',
            'font-size': '12',
            'font-weight': 'regular'
        }, 
        field: {
            value: 'Giro',
            check: false
        },
        text: '',
        type: 'Selección',
        large: 20,
        dec: 0,
        presentation: 'Viaje'
    }
];

export const principalConnection = {
    name: 'logística',
    type: 'BD',
    url: '192.168.10416'
}