# -*- coding: utf-8 -*-


import sys
import requests
import pprint
from os import name
import xml.etree.ElementTree as et
import pandas as pd
import bs4
from lxml import html
from urllib.parse import urlencode, quote_plus, unquote
import pandas as pd
import sqlalchemy

from sqlalchemy import create_engine

import winsound as sd

def AreaCheck(checked):
    check=[]
    print(checked)
    for i in range(0, len(checked)):
        print(checked[i])
        if(checked[i]=="1" and 8>i):
            check.append(str(i+1))
        elif(checked[i]=="1" and 8<=i):
            if(i==8):
                check.append("31")
            elif(i==9):
                check.append("32")
            elif(i==10):
                check.append("33")
            elif(i==11):
                check.append("34")
            elif(i==12):
                check.append("35")
            elif(i==13):
                check.append("36")
            elif(i==14):
                check.append("37")
            elif(i==15):
                check.append("38")
            elif(i==16):
                check.append("39")

    print(check)
    return check

def CategoryCheck(checked):
    NS=[0,0] #N vs S, N=> F vs T, S=> P vs J
    FT=[0,0]
    
    for i in range(0, 6):
        if(checked[i]=="1"):
            if(i%2==0):
                NS[0]=NS[0]+1
            else:
                NS[1]=NS[1]+1

    if(NS[0]>=2):
        Cat="N"
        for i in range(6, 12):
            if(checked[i]=="1"):
                if(i%2==0):
                    FT[0]=FT[0]+1
                else:
                    FT[1]=FT[1]+1

        if(FT[0]>=2):
            Cat=Cat+"F"
        else:
            Cat=Cat+"T"

    else:
        Cat="S"
        if(checked[11]=="1"):
            Cat=Cat+"P"
        else:
            Cat=Cat+"J"

    return Cat

def CategoryChoice(Cat):
    #CatArray=["자연","인문","레포츠","쇼핑","음식"]
    #CatArray=["A01","A02","A03","A04","A05"]

    if(Cat=="NF"):
        choice=["A01","A02","A03","A04"]
    
    elif(Cat=="NT"):
        choice=["A03","A01","A02","A05"]

    elif(Cat=="SP"):
        choice=["A01","A02"]

    else:
        choice=["A01","A02","A04","A05"]

    return choice


AreaArray=sys.argv[1]
CatArray=sys.argv[2]

AreaArray=AreaArray.split(',')
CatArray=CatArray.split(',')

#AreaArray=["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1"]
#CatArray=["1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "0", "0"]

print(AreaArray)
print(CatArray)

Area = AreaCheck(AreaArray) #지역
Cat = CategoryCheck(CatArray) #성격유추

choice = CategoryChoice(Cat) #카테고리 추천

AreaArray=["seoul1","Incheon2", "Daejeon3", "Daegu4", "Gwangju5", "Busan6", "Ulsan7", "Sejong8", "Gyeonggi-do31", "Gangwon-do32", "Chungcheongbuk-do33", "Chungcheongnam-do34", "Gyeongbuk-do35", "Gyeongsangnam-do36", "Jeollabuk-do37", "Jeollanam-do38", "Jeju-do39"]

for a in Area:
    if(a=="31"):
        print(AreaArray[8])
    elif(a=="32"):
        print(AreaArray[9])
    elif(a=="33"):
        print(AreaArray[10])
    elif(a=="34"):
        print(AreaArray[11])
    elif(a=="35"):
        print(AreaArray[12])
    elif(a=="36"):
        print(AreaArray[13])
    elif(a=="37"):
        print(AreaArray[14])
    elif(a=="38"):
        print(AreaArray[15])
    elif(a=="39"):
        print(AreaArray[16])
    else:
        print(AreaArray[int(a)-1])

print(Cat)
print(choice)

servicekey = "dLd9t9rfmv/AodxacX4Wg9gnSXwnrf9XU0Eqo8b48BEjHxSDizJ2TUsKuFcEng7Tv9cZxHRCc4rXxr5S69naaA==" #디코딩 인증키
url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList'

row_list1 = [] # 행값
name_list1 = [] # 열이름값
value_list1 = [] #데이터값

temp_dict1={}

row_list2 = [] # 행값
name_list2 = [] # 열이름값
value_list2 = [] #데이터값

temp_dict2={}

for i in range(0, len(Area)):
    for j in range(0, len(choice)):
        print("cat1 : ", choice[j])

        params={
            'serviceKey' : servicekey, 
            'areaCode' : Area[i],
            'cat1' : choice[j],
            'listYN' : 'Y',
            'MobileOS' : 'ETC',
            'MobileApp' : 'TourAPI3.0_Guide',
            'arrange' : 'A',
            'numOfRows' : '12',
            'pageNo' : 1
        }

        response = requests.get(url, params=params)

        content = response.text
        
        xml_obj = bs4.BeautifulSoup(content,'lxml-xml')
        rows = xml_obj.findAll('item')

        for x in range(0, len(rows)):
            columns = rows[x].find_all()
            #temp_dict2['cat1'] = string
            #temp_dict2['cat2'] = columns[j].text
                   
            for y in range(0,len(columns)):
                temp_dict1[columns[y].name]=columns[y].text #딕셔너리로 '태그:값'형태로 저장 

            row_list1.append(temp_dict1)
            temp_dict1={}

df = pd.DataFrame(data=None, index=None, columns=None, dtype=None, copy=False)

for i in range(0, len(row_list1)):
    new_data = row_list1[i]

    try:
        df=df.append(new_data, ignore_index=True)
    except:
        pass

try:
    df=df[['addr1','title','firstimage']]
except:
    df=df[['addr1','title']]

#print(df)
df.columns=['addr1', 'title', 'firstimage']
df.to_csv('test.csv', index=False, encoding="utf-8-sig")
print("end")