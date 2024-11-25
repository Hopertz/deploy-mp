from django.apps import AppConfig
import html
from pathlib import Path
import os
import pickle
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

modelPath = Path(__file__).resolve().parent




class WebappConfig(AppConfig):
    name = 'mmodel'
    predictor = pickle.load(open(modelPath/ "model"/ "model.pkl",'rb')) 

