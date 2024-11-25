from django.shortcuts import render
from .apps import WebappConfig 

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .apps import WebappConfig

class call_model(APIView):

    def get(self,request):
        if request.method == 'GET':
            
            # sentence is the query we want to get the prediction for
            regCode =  request.GET.get('Region')
            year =  request.GET.get('Year')

            
            # predict method used to get the prediction
            response = WebappConfig.predictor.predict([[int(regCode), int(year)]])
            #model.predict([[17, 2015]])
            
            # returning JSON response
            res = {'Result': response[0]}
            return JsonResponse(res,safe=False)