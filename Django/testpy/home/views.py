from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    respone=HttpResponse()
    respone.writelines("<h1>Chào</h1>")
    respone.write("App home")
    return respone