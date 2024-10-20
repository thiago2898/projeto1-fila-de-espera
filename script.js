const patients = []
let menu = ``
let interact = false
let patient = ''

do {
    menu = `Fila de espera\n`

    if (patients.length === 0) {
        menu += `Pacientes: Sem pacientes no momento.\n`
    } else {
        for (let i = 0; i < patients.length; i++) {
            menu += `${i + 1}º ${patients[i]}\n`
        }
    }

    menu += `1- Novo paciente\n`
    menu += `2- Consultar paciente\n`
    menu += `3- Sair`



    interact = prompt(menu)

    switch (interact) {
        case '1':
            patient = prompt('Qual o nome do paciente?')
            patients.push(patient)
            break
        case '2':
            if (patients.length === 0) {
                alert('Sem pacientes, logo não poderá consultar.')
            } else {
                alert('Paciente consultado: ' + patient)
                patients.shift()   
            }

            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }
    
} while (interact !== '3')
