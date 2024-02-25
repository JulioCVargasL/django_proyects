from django.shortcuts import render

""""Modulo django vaina averiguar shortcuts"""

def saludar(request, nombre, apellido, edad):
    context = {
        'nombre' : nombre,
        'apellido' : apellido,
        'edad'  : edad
    }
    return render(request, 'index.html', context)
